$(function(){
//         메뉴에 마우스오버하면 모든 서브메뉴배경 내려옴
        $('header').mouseover(function(){    
            $('.sub').stop().slideDown();
            $('.sub_bg').stop().slideDown();
        });
        //메뉴에서 마우스 아웃하면 모든 서브메뉴와 서브메뉴배경 올라감
        $('header').mouseleave(function(){    
            $('.sub').stop().slideUp();
            $('.sub_bg').stop().slideUp();
        });
        var header = $('.header');


        //메인슬라이드
        var swiper = new Swiper(".mySwiper", {
            loop:true,
            allowTouchMove : false,
            speed : 1000,
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
              },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              
            },
          });

          
    /*auto switch */
    var tabs = $('.table_box li');
    var timerId = 0;    
    
    timerId = setInterval(function() {
    var onTab = tabs.filter('.active');
    var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
    nextTab.click();
    $("#show").trigger("click");
    }, 2000);      
      
    $(".table_box").mouseleave(function () {

    timerId = setInterval(function() {
    var onTab = tabs.filter('.active');
    var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
    nextTab.click();
    }, 2000);        
        
    });

    $(".table_box").mouseenter(function () {
        clearInterval(timerId);
       });
    
    
    /* tab 기존코드 */
    
    $(".table_box").hide();
    $(".table_box:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active").css("color", "#555");
        $(this).addClass("active").css("color", "#fff");x
        $(".table_box").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });            

        //product slide
        var bullet = ['치즈', '버터', '크림/요거트','햄/살라미','푸아그라','캐비어','트러플','파스타/소스/오일','잼/스프레드','IQF과일','냉동 베이커리','음료','커피','리빙웨어'];
        var swiper = new Swiper(".productSwiper", {
          loop:true,
          slidesPerView: 1.5,
          centeredSlides: true,
          spaceBetween: 30,
          grabCursor: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return '<div class="' + className + '"><span class="span_txt">' + (bullet[index]) + '</span></div>';
            }
          },
        });
          
        const headerEl = document.querySelector('header');

        window.addEventListener('scroll', function(){
          if (window.scrollY > 10){
            headerEl.classList.add('bg');
          } else {
            headerEl.classList.remove('bg'); 
          }  
        });

           //   탭 메뉴
        // 모든 탭내용 숨김
        $('.p_tab_wrap > div').hide();
        //첫번째 탭내용만 보임
        $('.p_tab_wrap > div:first').show();


        $(".tab_title ul li:first").click(function(){
          $(".tab_title ul li:first").addClass("active");
          $(".tab_title ul li:not(:first)").removeClass("active");
          $(".p_tab_wrap > div:first").show();
          $(".p_tab_wrap > div:not(:first)").hide();
      });
      $(".tab_title ul li:nth-child(2)").click(function(){
        $(".tab_title ul li:nth-child(2)").addClass("active");
        $(".tab_title ul li:not(:nth-child(2))").removeClass("active");
        $(".p_tab_wrap > div:nth-child(2)").show();
        $(".p_tab_wrap > div:not(:nth-child(2))").hide();
      });
      $(".tab_title ul li:nth-child(3)").click(function(){
        $(".tab_title ul li:nth-child(3)").addClass("active");
        $(".tab_title ul li:not(:nth-child(3))").removeClass("active");
        $(".p_tab_wrap > div:nth-child(3)").show();
        $(".p_tab_wrap > div:not(:nth-child(3))").hide();
      });
      $(".tab_title ul li:nth-child(4)").click(function(){
        $(".tab_title ul :nth-child(4)").addClass("active");
        $(".tab_title ul li:not(:nth-child(4))").removeClass("active");
        $(".p_tab_wrap > div:nth-child(4)").show();
        $(".p_tab_wrap > div:not(:nth-child(4))").hide();
      });
      $(".tab_title ul li:nth-child(5)").click(function(){
        $(".tab_title ul li:nth-child(5)").addClass("active");
        $(".tab_title ul li:not(:nth-child(5))").removeClass("active");
        $(".p_tab_wrap > div:nth-child(5)").show();
        $(".p_tab_wrap > div:not(:nth-child(5))").hide();
      });
      $(".tab_title ul li:nth-child(6)").click(function(){
        $(".tab_title ul li:nth-child(6)").addClass("active");
        $(".tab_title ul li:not(:nth-child(6))").removeClass("active");
        $(".p_tab_wrap > div:nth-child(6)").show();
        $(".p_tab_wrap > div:not(:nth-child(6))").hide();
      });
      $(".tab_title ul li:last").click(function(){
        $(".tab_title ul li:last").addClass("active");
        $(".tab_title ul li:not(:last)").removeClass("active");
        $(".p_tab_wrap > div:last").show();
        $(".p_tab_wrap > div:not(:last)").hide();
      });

      $('a').click(function(e){
        e.preventDefault();
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
          $('#top').fadeIn();
      } else {
          $('#top').fadeOut();
      }
  });
  
  $("#top").click(function() {
      $('html, body').animate({
          scrollTop : 0
      }, 300);
      return false;
  });



});