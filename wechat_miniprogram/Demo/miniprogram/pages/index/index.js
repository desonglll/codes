// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    html_a:''
  },
  openFile:function(){
    var fileid = "cloud://cloud1-1ghbmqfb67a43ee4.636c-cloud1-1ghbmqfb67a43ee4-1305711151/发展党员工作细则.docx";
    var that = this;
    wx.cloud.getTempFileURL({
      fileList: [fileid],
      success: res => {
        that.setData({
          imgSrc: res.fileList[0].tempFileURL
        });
        wx.downloadFile({
          url: that.data.imgSrc,
          success: (res) => {
            that.setData({
              httpfile: res.tempFilePath
            })
            //预览文件
            wx.openDocument({
              filePath: that.data.httpfile,
              success: res => {
              },
              fail: err => {
                console.log(err);
              }
            })
          },
          fail: (err) => {
            console.log('读取失败', err)
          }
        })
      },
      fail: err => {
		console.log(err);
      }
    })
  },
})