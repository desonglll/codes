import request from "../../utils/request";
let startY = 0; // 手指起始的坐标
let moveY = 0; // 手指移动的坐标
let moveDistance = 0; // 手指移动的距离
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: 'translateY(0)',
    coveTransition: '',
    recentPlayList: [], // 用户播放记录
    apply:false,
    member:false,
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(app.globalData.userInfo)
    this.setData({
      userInfo:app.globalData.userInfo,
      // login_status:false
    })
    console.log(app.globalData.openid)
    wx.cloud.database().collection('login_users').where({
      _openid: app.globalData.openid
    })
    .get({
      success: function(res){
        if(res.data.length==0){
          console.log('not find the user')
          that.setData({
            login_status:false
          })
        }
        else{
          console.log("find the user")
          that.setData({
            login_status:true
          })
          
        }
      }
    })
  },

  handleTouchStart(event){
    this.setData({
      coveTransition: ''
    })
    // 获取手指起始坐标
    startY = event.touches[0].clientY;
  },
  handleTouchMove(event){
    moveY = event.touches[0].clientY;
    moveDistance = moveY - startY;
    
    if(moveDistance <= 0){
      return;
    }
    if(moveDistance >= 60){
      moveDistance = 60;
    }
    // 动态更新coverTransform的状态值
    this.setData({
      coverTransform: `translateY(${moveDistance}rpx)`
    })
  },
  handleTouchEnd(){
    // 动态更新coverTransform的状态值
    this.setData({
      coverTransform: `translateY(0rpx)`,
      coveTransition: 'transform 1s linear'
    })
  },
  
  toLogin(){
    this.setData({
      login_status:true
    })
    wx.getUserProfile({
      desc:'用于信息完善',//不写不弹提示框
      success:function(res){
        console.log(res.userInfo)
        var user = res.userInfo
        app.globalData.userInfo = user
        that.setData({
          result:'ok',// 结果
          userInfo:user,
          nickName:user.nickName,// 微信昵称
          avatarUrl:user.avatarUrl,// 微信头像
        })
        console.log('获取成功: ',res)
        wx.cloud.database().collection('login_users').where({
          _openid:app.globalData.openid
        }).get({
          success(res)
          {
            console.log(res)
            if(res.data.length==0){
              wx.cloud.database().collection('login_users').add({
                data:{
                  avatarUrl : user.avatarUrl,
                  nickName : user.nickName,
                },
                success(res){
                  console.log(res)
                  wx.showToast({
                    title: '授权成功',
                    icon: 'success',
                    duration: 1000
                  })
                }
              })
            }else{
              that.setData({
                userInfo:res.data[0]
              })
            }
          }
        })
      },
  
     })
      var that = this
      wx.navigateTo({
        url: '/pages/me/selectIdentity/selectIdentity'
      })
    },
  bindGetUserInfo: function(e) {
    console.log(e.detail.userInfo.nickName)
    var that = this;
    that.setData({
      result:'ok',// 结果
      nickName:e.detail.userInfo.nickName,// 微信昵称
      avatarUrl:e.detail.userInfo.avatarUrl,// 微信头像
    })
    
  },
  openFile:function(){
    var fileid = app.globalData.fileUrl
    console.log(fileid)
    var that = this;
    wx.cloud.downloadFile({
      fileID:fileid,
      fileType: 'docx',
      success(res){
        wx.showToast({
          title: "正在打开",
          icon: 'loading',
          duration: 1000
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
  openword_file:function(){
    wx.cloud.downloadFile({
      fileID:"cloud://cloud1-1goquyyvbe1eab85.636c-cloud1-1goquyyvbe1eab85-1311836648/发展党员工作细则.docx",
      fileType: 'docx',
      success(res){
        wx.showToast({
          title: "正在打开",
          icon: 'loading',
          duration: 1000
        })
        wx.openDocument({
          filePath: res.tempFilePath,
        })
      }
    })
  },
  actioncnt:function(){
    var that = this;
    wx.showActionSheet({
      itemList: ['入党申请书','思想汇报','自传','入党志愿书'],
      success:function(res){
        if(res.tapIndex == 0){
    var fileid = "cloud://cloud1-1goquyyvbe1eab85.636c-cloud1-1goquyyvbe1eab85-1311836648/Edit/入党申请书.docx";
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
              success: res => {
              },
              fail: err => {
                console.log(err);
              }
            })
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
        }
        if(res.tapIndex == 1){
    var fileid = "	cloud://cloud1-1goquyyvbe1eab85.636c-cloud1-1goquyyvbe1eab85-1311836648/Edit/思想汇报.docx";
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
              success: res => {
              },
              fail: err => {
                console.log(err);
              }
            })
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
        }
        if(res.tapIndex == 2){
    var fileid = "cloud://cloud1-1goquyyvbe1eab85.636c-cloud1-1goquyyvbe1eab85-1311836648/Edit/自传.docx";
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
              success: res => {
              },
              fail: err => {
                console.log(err);
              }
            })
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
        }
        if(res.tapIndex == 4){
    var fileid = "cloud://cloud1-1goquyyvbe1eab85.636c-cloud1-1goquyyvbe1eab85-1311836648/Edit/入党志愿书.docx";
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
              success: res => {
              },
              fail: err => {
                console.log(err);
              }
            })
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
        }
      },
      fail:function(res){
        console.log(res.errMsg)
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
    var that = this
    var flag = wx.getStorageSync('account')
    if(wx.getStorageSync('apply') == 1 && wx.getStorageSync('member') == 0){
      that.setData({
        apply:true,
        member:false
      })
    }if(wx.getStorageSync('apply') == 0 && wx.getStorageSync('member') == 1){
      that.setData({
        apply:false,
        member:true
      })
    }
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
