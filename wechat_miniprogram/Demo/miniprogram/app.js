//app.js
App({
  globalData: {
    userInfo: null,
    openid:null,
    fileUrl:null,
	},
  onLaunch: function () {
    wx.cloud.init({
      env:"cloud1-1goquyyvbe1eab85",
      traceUser: true,
    })
    var that = this;
    wx.cloud.callFunction({
      name:'login_get_openid',
      success(res)
      {
        console.log(res)
        that.globalData.openid =res.result.openid
        wx.cloud.database().collection('login_users').where({
          _openid:res.result.openid
        }).get({
            success(result){
              console.log(result)
              that.globalData.userInfo = result.data[0]
            }
        })
      }
    })
  }
})
