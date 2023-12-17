


jQuery(function($){

  $(document).ready(function() {
    setTimeout(function() {
        $('.loading-circle').addClass('animated');
        $('.loading').addClass('animated');
    }, 1000);
  });

  $(document).ready(function() {
    setTimeout(function() {
        $('.fv-img-wrapper').addClass('animated');
    }, 1500);
  });

  $(document).ready(function() {
    var scale = 0.9; // 初期スケール
    var $aboutImg = $('.about-img');

    function updateScale() {
          var windowHeight = $(window).height();
          var scrollPos = $(window).scrollTop();
          var imgPos = $aboutImg.offset().top;
          var imgHeight = $aboutImg.height();

          // 画像が画面に入ったか判定
          if (scrollPos + windowHeight > imgPos && scrollPos < imgPos + imgHeight) {
              var pixelsScrolled = scrollPos + windowHeight - imgPos;
              var scaleIncrease = Math.floor(pixelsScrolled / 1) * 0.00008;
              var newScale = Math.max(scale, scale + scaleIncrease);
              newScale = Math.min(newScale, 1.0); // スケールが1.0を超えないように制限
              $aboutImg.css('transform', 'scale(' + newScale + ')');
          }
    }

    $(window).scroll(updateScale);
  });

  $(document).ready(function() {
      $('.parent-li.li-active').find('.child-ul').show();
      $('.parent-li').hover(function() {
          
          $(this).addClass('li-active');
          $('.parent-li').not(this).removeClass('li-active');
          $(this).find('.child-ul').slideDown();
          $('.parent-li').not(this).removeClass('li-active').find('.child-ul').slideUp();
          var imgId = '#' + $(this).attr('id') + '-img';
          $(imgId).addClass('img-active');
          $('.right-img').not(imgId).removeClass('img-active');
      });
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

  const swiper1 = new Swiper(".swiper1", {
    loop: true, // ループ
    speed: 1500, // 少しゆっくり(デフォルトは300)
    slidesPerView: 2, // 一度に表示する枚数
    spaceBetween: 0, // スライド間の距離
    centeredSlides: true, // アクティブなスライドを中央にする
    autoplay: {
      // 自動再生
      delay: 6000, // 1秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiper2 = new Swiper(".swiper2", {
    loop: true, // ループ有効
    slidesPerView: 1.5, // 一度に表示する枚数
    speed: 12000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: {
      delay: 0, // 途切れなくループ
    },
  });




});