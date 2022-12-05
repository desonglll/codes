Page({
  data: {
    detailObj: {},
    index: null,
    isFocus: 1,
    select1: "selected",
    select2: "normal",
  },
  switchNav: function (e) {
    // var isFocus = that.data.isFocus;
    // console.log("isFocus", isFocus)
    console.log(e.target.id);
    this.setData({
      isFocus: e.target.id,
    });
    // console.log('e---->', e.currentTarget.id)
  },
  switchNav1: function (e) {
    var that = this;
    var isFocus = that.data.isFocus;
    console.log("isFocus", isFocus)
    this.setData({
      isFocus: 0,
      select1: "selected",
      select2: "normal",
      select3: "normal",
    });
    console.log(this.isFocus);
  },
  switchNav2: function (e) {
    var that = this;
    var isFocus = that.data.isFocus;
    console.log("isFocus", isFocus)
    this.setData({
      isFocus: 1,
      select1: "normal",
      select2: "selected",
      select3: "normal",
    });
  },
  book_no: () => {
    wx.showToast({
      title: "版权受限",
      icon: 'error',
      duration: 1000
    });
  },
  book1: function () {
    wx.cloud.downloadFile({
      fileID: "cloud://cloud1-1goquyyvbe1eab85.636c-cloud1-1goquyyvbe1eab85-1311836648/books/中共历史探微.docx",
      success(res) {
        wx.openDocument({
          filePath: res.tempFilePath,
        })
        wx.showToast({
          title: "正在打开",
          icon: 'loading',
          duration: 1000
        });
      }
    })
  },
  book2: function () {
    var fileid = "cloud://cloud1-1goquyyvbe1eab85.636c-cloud1-1goquyyvbe1eab85-1311836648/books/历史的回顾.docx";
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
              success: res => {},
              fail: err => {
                console.log(err);
              }
            })
            wx.showToast({
              title: "正在打开",
              icon: 'loading',
              duration: 1000
            });
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
  book3: function () {
    var fileid = "	cloud://cloud1-1goquyyvbe1eab85.636c-cloud1-1goquyyvbe1eab85-1311836648/books/毛泽东选集.docx";
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
              success: res => {},
              fail: err => {
                console.log(err);
              }
            })
            wx.showToast({
              title: "正在打开",
              icon: 'loading',
              duration: 1000
            });
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
  book4: function () {
    var fileid = "	cloud://cloud1-1goquyyvbe1eab85.636c-cloud1-1goquyyvbe1eab85-1311836648/books/苦难辉煌.docx";
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
              success: res => {},
              fail: err => {
                console.log(err);
              }
            })
            wx.showToast({
              title: "正在打开",
              icon: 'loading',
              duration: 1000
            });
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