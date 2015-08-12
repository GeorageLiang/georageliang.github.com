/**
 * Created by George on 2015/8/12.
 */
$(".navbar ul li").on("mouseover",function(){
	var wid = $(this).css("width");
	var lf = $(this).offset().left;
	$(".nav-footer").css({"margin-left":lf,"width":wid});

}).on("mouseleave",function(){

});