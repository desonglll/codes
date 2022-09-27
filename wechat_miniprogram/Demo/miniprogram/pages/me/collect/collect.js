// pages/collect/collect.js
const db = wx.cloud.database().collection('shoucang');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad : function(){
    db.doc('0a4ec1f962c7a1150f01d704781e1839').get({
      success: res => {
        console.log("res.data.status1",res.data.status);
      this.setData({
        status1:res.data.status
      })
      }
      })
    db.doc('16db756f62c796490a0a9c15264f2645').get({
      success: res => {
        console.log("res.data.status2",res.data.status);
      this.setData({
        status2:res.data.status
      })
      }
      })
    db.doc('058dfefe62ce728f0d60cf361d231fb6').get({
      success: res => {
        console.log("res.data.status3",res.data.status);
      this.setData({
        status3:res.data.status
      })
      }
      })
    db.doc('f6e08a6462ce726e0c2c43a94990c8ec').get({
      success: res => {
        console.log("res.data.status4",res.data.status);
      this.setData({
        status4:res.data.status
      })
      }
      })
    db.doc('b69f67c062ce75690af52b4846893a6f').get({
      success: res => {
        console.log("res.data.status5",res.data.status);
      this.setData({
        status5:res.data.status
      })
      }
      })
    db.doc('6d85a2b962d0b857108a412d49a9a4e7').get({
      success: res => {
        console.log("res.data.status6",res.data.status);
      this.setData({
        status6:res.data.status
      })
      }
      })
    db.doc('058dfefe62d95c7f0e8dccbd112d91fe').get({
      success: res => {
        console.log("res.data.status7",res.data.status);
      this.setData({
        status7:res.data.status
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