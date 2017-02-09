var app = getApp()
Page({
    data:{
        cinemaList:[]
    },
    onLoad:function(){
        var _this = this;
        wx.request({
            url:"http://json.bmbstack.com/cinemaList",
            method:"get",
            success:function(response){
                console.log(response.data);
                _this.data.cinemaList = response.data;
            },
            fail:function(error){
                console.log(error);
            }
        })
    }

})