// pages/link1/link1.js
let id;
Page({
  data: {
    detail:{},
  },
  onLoad : function(options){
    id = options.id;
    console.log(id)
    this.getDetail();
  },
  getDetail(){
    wx.cloud.callFunction({
      name:"article_list_get_one",
      data:{
        id:id
      }
    }).then(res=>{
      console.log(res);
      this.setData({
        detail:res.result.data
      })
    })
  }
})