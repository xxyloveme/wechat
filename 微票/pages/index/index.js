//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    navData:[],
    movieData:[]
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
 //跳转到电影院列表
 showCinema:function(){
   wx.navigateTo({
     url:"../cinema/index"
   })
 },

 //获取数据
  onLoad: function () {
   var _this=this;
    wx.request({
      url:"http://json.bmbstack.com/bannerList",
      method:"GET",
      success:function(response){
        console.log(response);
        _this.data.navData = response.data;
      },
      fail:function(error){
        console.log(error);
      }
    }),
    wx.request({
      url:"http://json.bmbstack.com/playingList",
      method:"GET",
      success:function(response){
       console.log(response);
        _this.data.movieData = response.data;
      },
      fail:function(){

      }
    })
  }
})
