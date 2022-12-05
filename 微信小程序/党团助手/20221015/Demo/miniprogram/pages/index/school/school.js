
let id;
Page({

  /**
   * 页面的初始数据
   */
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
      name:"activities_list_get_one",
      data:{
        id:id
      }
    }).then(res=>{
      // res.result.data.content=res.result.data.content.replace(/<img /,"<img style='max-width:100%' ")
      res.result.data.content=res.result.data.content.split(/<img /).join("<img style='max-width:100%' ")
      console.log(res);
      this.setData({
        detail:res.result.data
      })
    })
  }
})