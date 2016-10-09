$(function () {
   $('.search').on('click',function(){
      $('.header-inner').addClass('searching');
   });

   $('.btn').on('click',function(){
      $('.header-inner').removeClass('searching')
   });


   $('.nav-left').on('click',function () {
      $(this).find('.shang').toggleClass('zhuans');
      $(this).find('.xia').toggleClass('zhuanx');
      $('.zhezhao').slideToggle('dao');
      $('body').toggleClass('scroll');
   });
   $('.footer2-inner ul').on('click',function () {
      $(this).find('.shi').toggleClass('cha');
      $(this).find('li').slideToggle();
   })

   var slides=$('.banner-img a');
   var dots=$('.banner-dot .dot');
   var move=true;
   moveTo=function(el,dir){
      if(dir=='right'){
         if(move){
            move=false;
            $('.dot').removeClass('active').eq(el.index()).addClass('active');
            slides.filter('.active')
                .removeClass('active')
                .addClass('leave')
                .delay(1000)
                .queue(function () {
                   $(this).removeClass('leave').dequeue()
                   move=true;
                });
            $(el).addClass('right');
            $(el).get(0).offsetWidth;
            $(el).removeClass('right')
                .addClass('active');
         }}else if(dir=='left'){
         if(move){
            move=false;
            $('.dot').removeClass('active').eq(el.index()).addClass('active');
            slides.filter('.active')
                .removeClass('active')
                .addClass('right')
                .delay(1000)
                .queue(function () {
                   $(this).removeClass('right').dequeue()
                   move=true;
                });
            $(el).addClass('enter');
            $(el).get(0).offsetWidth;
            $(el).removeClass('enter')
                .addClass('active')
         }
         }

   }
   moveRight=function(){
      var c=slides.filter('.active');
      el=c.next().length?c.next():slides.eq(0);
      moveTo(el,'right')
   };
   moveLeft=function () {
      var c=slides.filter('.active');
      el=c.prev().length?c.prev():slides.eq(3);
      moveTo(el,'left')
   };
   $('.dot').on('click',function () {
      dots.removeClass('active');
      $(this).addClass('active');
      var c=slides.index(slides.filter('.active'));
      var n=$(this).index();
      if(c===n){return;}
      if(c>n){
         moveTo(slides.eq(n),"left")
      }else{
         moveTo(slides.eq(n),"right")
      }
   })
   var t=setInterval(moveRight,2000)
   $('.banner-box').hover(function () {
      clearInterval(t)
   },function () {
      t=setInterval(moveRight,2000)
   });

   $('.left-btn').on('click',function () {
         moveLeft();
   })
   $('.right-btn').on('click',function(){
         moveRight();
   })
})