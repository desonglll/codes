// pages/link1/link1.js
const db = wx.cloud.database().collection('shoucang');
const app = getApp()
Page({
  data: {
  },
  onLoad : function(){
    var that = this;
    console.log(app.globalData.userInfo)
    this.setData({
      userInfo:app.globalData.userInfo,
      // login_status:false
    })
    console.log(app.globalData.openid)
    var that = this
    wx.cloud.database().collection('login_users').where({
      _openid: app.globalData.openid
    })
    .get({
      success: function(res){
        if(res.data.length==0){
          console.log('not find the user')
          that.setData({
            login_status:false
          })
        }
        else{
          console.log("find the user")
          that.setData({
            login_status:true
          })
          db.doc('058dfefe62ce728f0d60cf361d231fb6').get({
            success: res => {
              console.log("res.data.status",res.data.status);
              that.setData({
              status:res.data.status
            })
            }
            })
        }
      }
    })
  },
  focusFavoriteTab: function (e) {
    var that = this;
    if (this.data.login_status){
      console.log("status",this.data.status)
    var status = that.data.status;
    if (status) {
      db.doc('058dfefe62ce728f0d60cf361d231fb6').update({
        data: {
          status:false,
        },
        success :(res)=> {
          console.log("res.data",res.data)
        },
      }),
      wx.showToast({
        title: "取消收藏",
        icon: 'success',
        duration: 1000
      });
      this.setData({
        status: false,
      });
      } else {
      db.doc('058dfefe62ce728f0d60cf361d231fb6').update({
        data: {
          status:true,
        },
        success :(res)=> {
          console.log("res.data",res.data)
        },
      }),
      wx.showToast({
        title:"收藏成功",
        icon: 'success',
        duration: 1000
      });
      this.setData({
        status: true,
      });
      }
    }
    else{
      wx.showModal({
        title: '提示',
        content: '请先登录',
        showCancel:false,
        confirmText:"确定",
        success: function(res) {
            if (res.confirm) {
            console.log('用户点击确定')
            } 
        }
    })
    }
    
  },

})