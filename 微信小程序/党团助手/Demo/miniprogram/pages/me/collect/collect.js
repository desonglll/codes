// pages/collect/collect.js
const db = wx.cloud.database().collection('user');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function () {
    var that = this
    wx.cloud.database().collection('user').where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        console.log("res.data.status1", res.data[0].link1);
        that.setData({
          status1: res.data[0].link1
        })
      }
    })
    wx.cloud.database().collection('user').where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        console.log("res.data.status2", res.data[0].link2);
        that.setData({
          status2: res.data[0].link2
        })
      }
    })
    wx.cloud.database().collection('user').where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        console.log("res.data.status3", res.data[0].link3);
        that.setData({
          status3: res.data[0].link3
        })
      }
    })
    wx.cloud.database().collection('user').where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        console.log("res.data.status4", res.data[0].link4);
        that.setData({
          status4: res.data[0].link4
        })
      }
    })
    wx.cloud.database().collection('user').where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        console.log("res.data.status5", res.data[0].link5);
        that.setData({
          status5: res.data[0].link5
        })
      }
    })
    wx.cloud.database().collection('user').where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        console.log("res.data.status6", res.data[0].link6);
        that.setData({
          status6: res.data[0].link6
        })
      }
    })
    wx.cloud.database().collection('user').where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        console.log("res.data.status7", res.data[0].link7);
        that.setData({
          status7: res.data[0].link7
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})