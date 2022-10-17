//app.js
App({
  globalData: {
    userInfo: null,
    openid: null,
    fileUrl: null,
    login_status:false
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
            console.log('cloudfunctions-success',result);
            that.globalData.userInfo = result.data[0]
            if(result.data.length==0){
              console.log('not find the user')
              that.globalData.login_status=false
            }
            else{
              console.log("find the user")
              that.globalData.login_status=true
            }
            console.log("that.globalData.login_status",that.globalData.login_status)
          },
          fail:function(err) {
            console.log(err);
          }
        })
      },
      fail:function(err) {
        console.log(err);
      }
    })
  }
})