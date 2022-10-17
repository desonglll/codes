//discovery.js
var util = require('../../../utils/utils.js')
Page({
  data: {
    listArr:[],
    loading:true
  },
  onLoad: function () {
    this.getData();
  },
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
  onReachBottom() {
    this.getData(this.data.listArr.length);
  },
});
