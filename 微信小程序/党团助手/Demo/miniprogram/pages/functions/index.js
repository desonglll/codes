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
  openFile: function () {
    var fileid = app.globalData.fileUrl
    // console.log(fileid)
    var that = this;
    wx.cloud.downloadFile({
      fileID: fileid,
      fileType: 'docx',
      success(res) {
        wx.showToast({
          title: "正在打开",
          icon: 'loading',
          duration: 1000
        })
        wx.openDocument({
          filePath: res.tempFilePath,
        })
      },
      fail: (err) => {
        wx.showToast({
          title: "无待审核材料",
          icon: 'loading',
          duration: 1000
        })
      }
    })
  },

})