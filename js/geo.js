$(document).ready(function(){
  $(".navbar-inverse").headroom({
    "tolerance": 20,
    "offset": 520,
    "classes": {
      "initial": "header",
      "pinned": "up",
      "unpinned": "down"
    }
  });
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