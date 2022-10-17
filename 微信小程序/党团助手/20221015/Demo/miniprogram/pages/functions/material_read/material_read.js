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
      name: "materials_list_read",
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
          title: "无待审核材料",
          icon: 'loading',
          duration: 1000
        })
      }
    })
  },
  pass: function (thisfile) {
    const m_id = thisfile.currentTarget.dataset.item._id
    const that = this;
    wx.cloud.database().collection('material').doc(m_id).update({
      data: {
        read: true,
        status: false
      }
    })
    that.setData({
      listArr: []
    })
    this.getData();
  },
  reject: function (thisfile) {
    const m_id = thisfile.currentTarget.dataset.item._id
    const that = this;
    wx.cloud.database().collection('material').doc(m_id).update({
      data: {
        read: true,
        status: true
      }
    })
    that.setData({
      listArr: []
    })
    this.getData();
  },
  showInput: function (thisfile) {

    this.setData({
      showInput: true,
      f_id : thisfile.currentTarget.dataset.path._id
    })
    console.log(this.data.f_id)
  },
  close: function () {
    this.setData({
      showInput: false,
    })
  },
  submit: function () {
    var ffid = this.data.f_id
    var fftext = this.data.text
    console.log(fftext);
    wx.cloud.database().collection('material').doc(ffid).update({
      data: {
        feedback:fftext
      }
    })
    this.setData({
      showInput: false,
    })
  },
  onChange: function (e) {
    this.setData({
      text: e.detail
    })
  }
})