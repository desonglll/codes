let filepath = '';
const app = getApp()
Page({
  data: {
    filetype:'',
    author:''
  },
  getInputType:function(e){
    this.setData({
      filetype:e.detail.value
    })
    console.log("this.data.filetype",this.data.filetype)
  },
  getInputName:function(e){
    this.setData({
      author:e.detail.value
    })
    console.log("this.data.filetype",this.data.author)
  },
    onUpload() {
    var that = this
        wx.chooseMessageFile({
            count: 1,
            type: "file",
            success(res) {
                filepath = res.tempFiles[0].path
                wx.cloud.uploadFile({
                    cloudPath: that.data.filetype + '-' + that.data.author + ".docx",
                    filePath: filepath,
                    success(res) {
                      app.globalData.fileUrl = res.fileID
                      console.log(" app.globalData.fileUrl", app.globalData.fileUrl)
                        wx.showToast({
                          title: "上传成功",
                          icon: 'success',
                          duration: 1000
                        })

                    }
                })
            },

            fail: err => {
                wx.showModal({
                    title: '提示',
                    content: 'please choose a correct file path !'
                })
            }
        });
    }
})