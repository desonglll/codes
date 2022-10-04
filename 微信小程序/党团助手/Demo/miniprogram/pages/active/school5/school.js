// pages/link1/link1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  
  focusFavoriteTab: function (e) {
    var that = this;
    var isFocus = that.data.isFocus;
    console.log("isFocus", isFocus)
    var itemId = that.data.itemId;
    console.log("itemId", itemId)
    if (isFocus) {
      wx.showToast({
      title: "取消收藏",
      icon: 'success',
      duration: 1000
      });
      this.setData({
      isFocus: false,
      });
      } else {
      wx.showToast({
      title:"收藏成功",
      icon: 'success',
      duration: 1000
      });
      this.setData({
      isFocus: true,
      });
      }
      },
  
})