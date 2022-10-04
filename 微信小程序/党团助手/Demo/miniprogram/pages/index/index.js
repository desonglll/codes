// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    html_a: ''
  },
  onRefresh: function () {
    //导航条加载动画
    wx.showNavigationBarLoading()
    //loading 提示框
    // wx.showLoading({
    //   // title: 'Loading...',
    // })
    console.log("下拉刷新啦");
    setTimeout(function () {
      // wx.hideLoading();
      wx.hideNavigationBarLoading();
      //停止下拉刷新
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '刷新成功!',
        icon:'none'
      })
    }, 1500)
  },
  onPullDownRefresh:function(){
    this.onRefresh();
  },
})