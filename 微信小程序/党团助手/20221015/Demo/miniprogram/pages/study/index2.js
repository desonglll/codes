const app = getApp()
Page({
  data: {
    detailObj: {},
    index: null,
    isFocus: 1,
    select1: "selected",
    select2: "normal",
    listArr:[],
    loading:true,
  },
  onLoad(options) {
    this.getData();
  },
  getData(size=0){
    wx.cloud.callFunction({
      name:"books_list",
      data:{
        size
      }
    }).then(res=>{
      if(res.result.data<=0){
        this.setData({
          loading:false
        })
      }
      let oldData =this.data.listArr;
      let newData = oldData.concat(res.result.data);
      console.log(res);
      this.setData({
        listArr:newData 
      })
    })
  },
  onReachBottom() {
    this.getData(this.data.listArr.length);
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
    wx.cloud.database().collection("books_collect").where({
      _openid: app.globalData.openid
    }).update({
      data:{
        book1:true
      }
    })
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
    wx.cloud.database().collection("books_collect").where({
      _openid: app.globalData.openid
    }).update({
      data:{
        book2:true
      }
    })
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
    wx.cloud.database().collection("books_collect").where({
      _openid: app.globalData.openid
    }).update({
      data:{
        book3:true
      }
    })
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
    wx.cloud.database().collection("books_collect").where({
      _openid: app.globalData.openid
    }).update({
      data:{
        book4:true
      }
    })
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