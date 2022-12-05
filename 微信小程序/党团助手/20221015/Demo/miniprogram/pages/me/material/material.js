// pages/functions/material_read/material_read.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [],
    loading: true,
    showInput: false,
    text: "",
    f_id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData();
  },
  getData(size = 0) {
    wx.cloud.callFunction({
      name: "materials_list_me",
      data: {
        size
      }
    }).then(res => {
      if (res.result.data <= 0) {
        this.setData({
          loading: false
        })
      }
      let oldData = this.data.listArr;
      let newData = oldData.concat(res.result.data);
      console.log(res);
      this.setData({
        listArr: newData
      })
    })
  },
  onReachBottom() {
    this.getData(this.data.listArr.length);
  },
  openFile: function (thisfile) {
    console.log(this)
    console.log(thisfile)
    var fileid = thisfile.currentTarget.dataset.path.filepath
    var xvhao = thisfile.currentTarget.dataset.path._id
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
        wx.cloud.database().collection('material').doc(xvhao).update({
          data: {
            read: true
          }
        })
        wx.openDocument({
          filePath: res.tempFilePath,
        })
      },
      fail: (err) => {
        wx.showToast({
          title: "材料错误",
          icon: 'loading',
          duration: 1000
        })
      }
    })
  },
  showInput: function (thisfile) {
    this.setData({
      f_id : thisfile.currentTarget.dataset.path._id
    })
    var ffid = this.data.f_id
    wx.cloud.database().collection('material').doc(ffid).get().then(res => {
      console.log(res.data.feedback)
      this.setData({
        showInput: true,
        text:res.data.feedback
      })
    })
  },
  close: function () {
    this.setData({
      showInput: false,
    })
  },
})