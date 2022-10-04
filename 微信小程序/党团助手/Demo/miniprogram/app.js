//app.js
App({
  globalData: {
    userInfo: null,
    openid: null,
    fileUrl: null,
  },
  onLaunch: function () {
    console.log('launch');
    wx.cloud.init({
      env: "cloud1-1goquyyvbe1eab85",
      traceUser: true,
    })
    var that = this;
    wx.cloud.callFunction({
      name: 'login_get_openid',
      success(res) {
        console.log(res.result.openid);
        that.globalData.openid = res.result.openid
        wx.cloud.database().collection('user').where({
          _openid: res.result.openid
        }).get({
          success(result) {
            console.log('cloudfunctions-success');
            that.globalData.userInfo = result.data[0]
          },
          fail:function(err) {
            console.err(err);
          }
        })
      },
      fail:function(err) {
        console.err(err);
      }
    })
  }
})