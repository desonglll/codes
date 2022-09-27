Page({
  data: {
    account: '',
    password: '',
    data: '',
  },
  onShow: function(options){
    console.log(wx.getStorageSync('data'))
    this.setData({
      data: wx.getStorageSync('data').data
    }) 
  },
  //点击登陆
  login() {
    let account = wx.getStorageSync('data').data
    let password = '123456'
    console.log('账号', account, '密码', password)
    console.log(account == '20220702')
    if (account == '20220702') {
      console.log('登录成功')
          wx.showToast({
            title: '登录成功',
          })
          wx.switchTab({
            url: '/pages/me/me',
          })
          //保存用户登录状态
          wx.setStorageSync('account', '20220702')
          wx.setStorageSync('name', '入党申请人')
          wx.setStorageSync('apply', '0')
          wx.setStorageSync('member', '1')
    }
    if (account == '20220701') {
      console.log('登录成功')
          wx.showToast({
            title: '登录成功',
          })
          wx.switchTab({
            url: '/pages/me/me',
          })
          //保存用户登录状态
          wx.setStorageSync('account', '20220702')
          wx.setStorageSync('name', '组织部成员')
          wx.setStorageSync('apply', '1')
          wx.setStorageSync('member', '0')
    }
  }
/*
  //获取输入的账号
  getAccount(event) {
    //console.log('账号', event.detail.value)
    this.setData({
      account: event.detail.value
    })

  },
  //获取输入的密码
  getPassword(event) {
    // console.log('密码', event.detail.value)
    this.setData({
      password: event.detail.value
    })
  },
  //点击登陆
  login() {
    let account = this.data.account
    let password = this.data.password
    console.log('账号', account, '密码', password)
    if (account.length < 10) {
      wx.showToast({
        icon: 'none',
        title: '账号为10位数',
      })
      return
    }
    if (password.length < 6) {
      wx.showToast({
        icon: 'none',
        title: '密码为6位数',
      })
      return
    }

    //登录
    wx.cloud.database().collection('user').where({
      account: account
    }).get({
      success(res) {
        console.log("获取数据成功", res)
        let user = res.data[0]
        console.log("user", user)
        if (password == user.password) {
          console.log('登录成功')
          wx.showToast({
            title: '登录成功',
          })
          wx.switchTab({
            url: '/pages/me/me',
          })
          //保存用户登录状态
          wx.setStorageSync('account', account)
          wx.setStorageSync('name', user.name)
          wx.setStorageSync('apply', user.apply)
          wx.setStorageSync('member', user.member)
        } else {
          console.log('登陆失败')
          wx.showToast({
            icon: 'none',
            title: '账号或密码不正确',
          })
        }
      },
      fail(res) {
        console.log("获取数据失败", res)
      }
    })

  }
    */
})
