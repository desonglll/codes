// pages/link1/link1.js
const db = wx.cloud.database().collection('user');
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
    wx.cloud.database().collection('user').where({
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
          db.where({
            _openid: app.globalData.openid
          }).get({
            success: res => {
              console.log(res.data[0].link1);
              that.setData({
              status:res.data[0].link1
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
      db.where({
        _openid: app.globalData.openid
      }).update({
        data: {
          link1:false,
        },
        success :(res)=> {
          console.log("res",res)
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
      db.where({
        _openid: app.globalData.openid
      }).update({
        data: {
          link1:true,
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