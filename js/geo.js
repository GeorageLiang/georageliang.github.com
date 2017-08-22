//var h1= parseInt($(".head-img")[0].offsetHeight);
//var b = 0;
//
//$(document).scroll(function(){
//  var op = $(".head-img").css("-webkit-filter");
//  var vtop = $(document).scrollTop();
//
//  var c= vtop;
//
//  if(c>=b){
//    if(c>130){
//
//      $(".head-img").css("-webkit-filter","blur(3px)");
//
//    }
//    if(c>260){
//
//      $(".head-img").css("-webkit-filter","blur(7px)");
//
//    }
//
//    b=c;
//
//  }
//  if(b>c){
//    if(c<130){
//      $(".head-img").css("-webkit-filter","blur(0px)");
//
//    }
//
//    if(c<260 && c>130){
//
//      $(".head-img").css("-webkit-filter","blur(1px)");
//
//    }
//    if(c>260){
//
//      $(".head-img").css("-webkit-filter","blur(4px)");
//
//    }
//    b=c;
//  }
//
//});



$(document).ready(function(){

  //$(".navbar-inverse").headroom({
  //  "tolerance": 20,
  //  "offset": 520,
  //  "classes": {
  //    "initial": "header",
  //    "pinned": "up",
  //    "unpinned": "down"
  //  }
  //});
  setInterval(function(){                //每2秒钟执行一次

  $("#cat-head").css("-webkit-transform","rotate(-10deg)");
  //id为head的元素（即猫头）实现向右旋转10度（chrome内核）
  $("#cat-head").css("-o-transform","rotate(-10deg)");
  //id为head的元素（即猫头）实现向右旋转10度（opear内核）
  $("#cat-head").css("-moz-transform","rotate(-10deg)");
  //id为head的元素（即猫头）实现向右旋转10度（火狐内核）
  setTimeout(function(){

    $("#cat-head").css("-webkit-transform","rotate(10deg)");  //一秒后执行猫头向左旋转10度
    $("#cat-head").css("-o-transform","rotate(10deg)");
    $("#cat-head").css("-moz-transform","rotate(10deg)");

  },1000);

},2000);

});