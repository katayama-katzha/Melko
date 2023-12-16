


jQuery(function($){
  $(window).scroll(function() {
    var fvTop = $('.fv').offset().top; // fvの初期位置を取得
    var fvHeight = $('.fv').outerHeight(); // fvの全体的な高さを取得
    var scrollPos = $(this).scrollTop(); // スクロールの位置を取得

    // fvが完全に画面外に出た場合
    if(scrollPos > fvTop + fvHeight) {
        $('header').addClass('fixed');
        $('.bottom-cta').addClass('fixed');
    } else {
        // fvが画面内に戻った場合
        $('header').removeClass('fixed');
        $('.bottom-cta').removeClass('fixed');
    }
});

  
  $( function() {
    $( 'a[href^="#"]' ).on( 'click', function(e){
      var speed = 500;
      var type = 'swing';
      var href= $( this ).attr( 'href' );
      var target = $( href === '#' || href === '' ? 'html' : href );
      
      if (window.matchMedia('(max-width: 767px)').matches){
        var position = target.offset().top - 50;
      }else{
        var position = target.offset().top - 85;
      }
      $( 'html, body' ).animate( { scrollTop:position }, speed, type );
      e.preventDefault();
    });



  });

  $( function() {
    $( '.burger' ).on( 'click', function(e){
      $(this).toggleClass('active');
      $('.right').toggleClass('active');
      e.preventDefault();
    });

    $( '.right a' ).on( 'click', function(){
      $('.burger').removeClass('active');
      $('.right').removeClass('active');

    });

  });

  // 当月の最終日の日付を取得
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth();
  var lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

  // 日付を表示形式に整形
  var formattedDate = currentYear + "年" + (currentMonth + 1) + "月" + lastDay + "日";

  // id="date"要素に日付を設定
  $("#date").text(formattedDate);
  $("#date2").text(formattedDate);


//   $(document).ready(function() {
//     var $slider = $("#slider");
//     var speed = 50; // ここにスライド速度をピクセル/秒単位で設定します。

//     function slide() {
//         var $firstSlide = $slider.find(".slide:first");
//         var width = $firstSlide.outerWidth(true); // マージンを含む幅を取得します。

//         // アニメーションの時間を計算します（ミリ秒単位）
//         var time = width / speed * 1000;

//         $firstSlide.animate({ marginLeft: -width }, time, "linear", function() {
//             // アニメーションが完了したスライドを削除します。
//             $(this).remove();

//             // 次のスライドのアニメーションを開始します。
//             slide();
//         });

//         // アニメーションが開始された直後に次のスライドのクローンを作成し、スライダーの末尾に追加します。
//         $slider.find(".slide").eq(1).clone().appendTo($slider);
//     }

//     // 初回のアニメーションを開始します。
//     slide();
// });

$(document).ready(function() {
  $(window).scroll(function() {
    var footer = $('footer');
    var footerOffset = footer.offset().top;
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > footerOffset - windowHeight) {
      $('.bottom-cta').removeClass('fixed');
    }
  });
});

const theWrapper = document.getElementById('wrapper1');
const theContainer = document.getElementById('container1');
new Swiper( '.swiper-container1', {
  slidesPerView: 0.3,
  spaceBetween: 0,
  loop: true,
  speed: 25000,
  clickable:false,
  preventLinks:false,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
  },

  on: {
    slideChangeTransitionStart: function(){
      theWrapper.style.transitionTimingFunction = 'linear';
      theContainer.style.transitionTimingFunction = 'linear';
    },

  },

  breakpoints: {
    
    768: {
      slidesPerView: 0.8,
    },
    1580: {
      slidesPerView: 1.4,
    },
  }


});









  







  
  
  

  
  



});