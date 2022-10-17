const db = wx.cloud.database()
let id;
const app = getApp()
Page({
  data: {
    detail:{},
    id:'',
    show1:'',
    xuhao:'',
    shoucang:[],
    shouchangUrl1: "https://i.loli.net/2021/08/17/GfXIvoW7PuUmiw2.png",

  },
  onLoad : function(options){
    id = options.id;
    console.log(id)
    this.getDetail();
    this.setData({
      _id:options.id
    })
    var that = this
    if(app.globalData.login_status){
      wx.cloud.database().collection('news').doc(id).get().then(res => {
        console.log('获取到的收藏数组', res.data.shoucang)
        that.setData({
          shoucang:res.data.shoucang
        })
        wx.cloud.callFunction({
          name: 'login_get_openid',
          success: res => {
           var shoucang = that.data.shoucang;
           var openid =  res.result.openid;
           console.log("云函数获取到的openid:",openid)
           if(shoucang.indexOf(openid)>-1){
            that.setData({
              shouchangUrl1: "https://i.loli.net/2021/08/17/XdVuspHQPxmScW3.png",
              show1:true
            })
             console.log('收藏存在')
           }else{
            that.setData({
              shouchangUrl1: "https://i.loli.net/2021/08/17/GfXIvoW7PuUmiw2.png",
              show1:false
            })
             console.log('收藏不存在')
           }
   
          }
        })
      })
    }
  },
  focusFavoriteTab: function (e) {
    var that = this;
    if (app.globalData.login_status){
    if(this.data.show1==0){
      wx.cloud.callFunction({
        name: 'login_get_openid',
        success: res => {
        console.log('云函数获取到的openid: ', res.result.openid)
        var openid = res.result.openid;
        var xuhao= this.data._id
        var _ = db.command
        db.collection('news').doc(xuhao).update({
        data: {
          shoucang: _.addToSet(openid)
        }
        })
       }
     })
      this.setData({
        shouchangUrl1: "https://i.loli.net/2021/08/17/XdVuspHQPxmScW3.png",
        show1:true
      })
      wx.showToast({
        title: "收藏成功",
        icon: 'success',
        duration: 1000
      });
     }else{
      wx.cloud.callFunction({
        name: 'login_get_openid',
        success: res => {
        console.log('云函数获取到的openid: ', res.result.openid)
        var openid = res.result.openid;
        var xuhao= this.data._id
        var _ = db.command
        db.collection('news').doc(xuhao).update({
        data: {
          shoucang: _.pull(openid)
        }
        })
       }
     })
      this.setData({
        shouchangUrl1: "https://i.loli.net/2021/08/17/GfXIvoW7PuUmiw2.png",
        show1:false
      })
      wx.showToast({
        title:"取消收藏",
        icon: 'success',
        duration: 1000
      })
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
  getDetail(){
    wx.cloud.callFunction({
      name:"article_list_get_one",
      data:{
        id:id
      }
    }).then(res=>{
      console.log(res);
      this.setData({
        detail:res.result.data
      })
    })
  }
})