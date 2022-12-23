$('text').each(function() {
  const el = $(this)
  const text = el.html().split('')
  el.html(`<tspan>${text.join('</tspan><tspan>')}</tspan>`)
})

$('#_x31_').velocity({ 'stroke-dashoffset': 569 }, { duration: 0, delay: 0 }).velocity({ 'stroke-dashoffset': 0 }, { duration: 500, delay: 0 });
$('#_x32_').velocity({ 'stroke-dashoffset': 213 }, { duration: 0, delay: 0 }).velocity({ 'stroke-dashoffset': 0 }, { duration: 500, delay: 500 });
$('#_x33_').velocity({ 'stroke-dashoffset': 124 }, { duration: 0, delay: 0 }).velocity({ 'stroke-dashoffset': 0 }, { duration: 500, delay: 1000 });
$('#_x34_').velocity({ 'stroke-dashoffset': 104 }, { duration: 0, delay: 0 }).velocity({ 'stroke-dashoffset': 0 }, { duration: 500, delay: 1500 });
$('#_x35_').velocity({ 'stroke-dashoffset': 78 }, { duration: 0, delay: 0 }).velocity({ 'stroke-dashoffset': 0 }, { duration: 500, delay: 2000 });
$('#_x36_').velocity({ 'stroke-dashoffset': 294 }, { duration: 0, delay: 0 }).velocity({ 'stroke-dashoffset': 0 }, { duration: 500, delay: 2500 });
$('#_x39_').velocity({ 'stroke-dashoffset': 101 }, { duration: 0, delay: 0 }).velocity({ 'stroke-dashoffset': 0 }, { duration: 500, delay: 3000 });
$('#_x31_0').velocity({ 'stroke-dashoffset': 193 }, { duration: 0, delay: 0 }).velocity({ 'stroke-dashoffset': 0 }, { duration: 500, delay: 3500 });
$('#_x31_1').velocity({ 'stroke-dashoffset': 80 }, { duration: 0, delay: 0 }).velocity({ 'stroke-dashoffset': 0 }, { duration: 500, delay: 4000 });
$('#_x31_2').velocity({ 'stroke-dashoffset': 108 }, { duration: 0, delay: 0 }).velocity({ 'stroke-dashoffset': 0 }, { duration: 500, delay: 4500 });
$('#_x31_3').velocity({ 'stroke-dashoffset': 73 }, { duration: 0, delay: 0 }).velocity({ 'stroke-dashoffset': 0 }, { duration: 500, delay: 5000 });
$('#_x31_4').velocity({ 'stroke-dashoffset': 69 }, { duration: 0, delay: 0 }).velocity({ 'stroke-dashoffset': 0 }, { duration: 500, delay: 5500 });



$(function(){
  // var headH = $(".header").height(); 
  // var footerH = $(".footer").height(); 

  $(window).resize(function(){
      wHrezie();
  });

  var wHrezie = function(){
      var wH = $(window).height()-headH;
      $(".page").css("height",wH);
  }

  wHrezie();

  /* [S] 인디게이터 화면전환 */
  var idx = 0;
  var isMove = false;
  var pageNum = $(".page li").length-1;

  $('.menu li a').click(function(){
      var menuNum = $('.menu li').length;
      var preIdx = idx;
      idx = $(this).parent().index();

      if(preIdx == idx) return false;            

      if(preIdx > idx) { //UP
          if($(".page li").is(":animated")) return false;
          $(".page li:gt("+idx+")").stop().animate({'top':'100%'},500); //idx보다 큰수
          $(".page li").eq(preIdx).stop().animate({"top":"100%"},500);  
      } else { //DOWN
          if($(".page li").is(":animated")) return false;
          $(".page li:lt("+idx+")").stop().animate({'top':'-100%'},500); //idx보다 작은수
          $(".page li").eq(preIdx).stop().animate({"top":"-100%"},500);
      }
      
      focusOn();
  });
  /* [E] 인디게이터 화면전환 */

  /* [S] 마우스휠 화면전환 */
  $(window).on('wheel', function(e){
      if(e.originalEvent.wheelDelta > 0) {
          whellUp();
      } else {
          whellDown();
      }
  });
  /* [E] 마우스휠 화면전환 */

  var whellUp = function(){
      var preIdx = idx;

      if($("#wrap, .page li").is(":animated")) return false;
      if(idx > 0) idx--;
      if(idx <= pageNum) $("#wrap").stop().animate({"margin-top":"0"},500); //footer

      $(".page li:gt("+idx+")").stop().animate({'top':'100%'},500); //idx보다 큰수
      $(".page li").eq(preIdx).stop().animate({"top":"100%"},500);
      $(".page li").eq(idx).stop().animate({"top":0},500);

      focusOn();
  }

  var whellDown = function(){
      var preIdx = idx;

      if($("#wrap, .page li").is(":animated")) return false;
      if(idx < pageNum) {
          idx++;
      } else {
          idx = pageNum+1;
          $("#wrap").stop().animate({"margin-top":-footerH+"px"},500); //footer
          return false;
      }
      $(".page li:lt("+idx+")").stop().animate({'top':'-100%'},500); //idx보다 작은수
      $(".page li").eq(preIdx).stop().animate({"top":"-100%"},500);
      $(".page li").eq(idx).stop().animate({"top":0},500);

      focusOn();		
  }

  var focusOn = function(){
      $(".page li").removeClass("on");            
      $(".page li").eq(idx).stop().animate({"top":0},500).addClass("on");

      $('.menu li').removeClass("on");
      $('.menu li').eq(idx).addClass("on");
  }

});