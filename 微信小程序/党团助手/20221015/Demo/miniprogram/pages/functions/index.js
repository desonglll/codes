// pages/functions/index.js
const app = getApp()
Page({
  data: {
    apply: true,
    member: false
  },
  onShow: function () {
    var that = this
    if (wx.getStorageSync('role') == 'apply') {
      that.setData({
        apply: true,
        member: false
      })
    }
    if (wx.getStorageSync('role') == 'member') {
      that.setData({
        apply: false,
        member: true
      })
    }
  },
  submit:function(){
    console.log("this.data.login_status",this.data.login_status)
    if (app.globalData.login_status){
      wx.navigateTo({
        url: '/pages/functions/material_submit/material_submit',
      })
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