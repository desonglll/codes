const app = getApp()
const db = wx.cloud.database().collection('login');
Page({
  data: {
    account: '',
    password: '',
    data: {},
    role: ''
  },
  onShow: function () {
    this.setData({
      role: wx.getStorageSync('role')
    })
  },
  //点击登陆
  login() {
    const that = this
    db.where({
      account: that.data.account,
      role: that.data.role
    }).get({
      success: function (res) {
        const info = res.data[0]
        if (!info) {
          wx.showToast({
            title: '用户不存在',
            icon: 'error'
          })
        } else if (info.password != that.data.password) {
          wx.showToast({
            title: '密码错误',
            icon: 'error'
          })
        } else {
          wx.showToast({
            title: '登录成功',
          })
          wx.setStorageSync('account', that.data.account)
          wx.setStorageSync('name', info.name)
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/me/me',
            })
          }, 1000);
        }
      }
    });
    // if (account == '20220702') {
    //   wx.showToast({
    //     title: '登录成功',
    //   })
    //   wx.switchTab({
    //     url: '/pages/me/me',
    //   })
    //   //保存用户登录状态

    // }
    // if (account == '20220701') {
    //   console.log('登录成功')
    //   wx.showToast({
    //     title: '登录成功',
    //   })
    //   wx.switchTab({
    //     url: '/pages/me/me',
    //   })
    //   //保存用户登录状态
    //   wx.setStorageSync('account', '20220702')
    //   wx.setStorageSync('name', '组织部成员')
    //   wx.setStorageSync('apply', '1')
    //   wx.setStorageSync('member', '0')
    // }
  },

  //获取输入的账号
  getAccount(e) {
    this.setData({
      account: e.detail.value
    })
  },
  //获取输入的密码
  getPassword(e) {
    this.setData({
      password: e.detail.value
    })
  },


  /*
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