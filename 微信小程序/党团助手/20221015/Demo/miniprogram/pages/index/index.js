// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    listArr:[],
    loading:true,
    html_a: '',
    arr:[
      "https://typora012.oss-cn-qingdao.aliyuncs.com/202207111151793.webp",
      "https://typora012.oss-cn-qingdao.aliyuncs.com/202210031629751.png",
      "https://typora012.oss-cn-qingdao.aliyuncs.com/202207111151663.webp"
    ]
  },
  onLoad(options) {
    this.getData();
  },
  onRefresh: function () {
    //导航条加载动画
    wx.showNavigationBarLoading()
    //loading 提示框
    // wx.showLoading({
    //   // title: 'Loading...',
    // })
    console.log("下拉刷新啦");
    setTimeout(function () {
      // wx.hideLoading();
      wx.hideNavigationBarLoading();
      //停止下拉刷新
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '刷新成功!',
        icon:'none'
      })
    }, 1500)
  },
  onPullDownRefresh:function(){
    this.onRefresh();
  },
  // onReachBottom() {
  //   this.getData(this.data.listArr.length);
  // },
  getData(size=0){
    wx.cloud.callFunction({
      name:"activities_list_get",
      data:{
        size
      }
    }).then(res=>{
      if(res.result.data<=0){
        this.setData({
          loading:false
        })
      }
      let oldData =this.data.listArr;
      let newData = oldData.concat(res.result.data);
      console.log(res);
      this.setData({
        listArr:newData 
      })
    })
  },
})