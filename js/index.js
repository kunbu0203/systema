
var arrowArr = ['適齦佳<span>牙膏</span>','無隱角EX<span>牙刷</span>','無隱角<span>系列牙刷</span>','兒童專業<span>護理牙刷</span>','適齦佳<span>漱口水</span>'];
var videoName = ['獅王細潔新品上市','細潔兒童專業護理牙刷 <span>X 袋鼠白金獎評鑑</span>']
var isMobileStyle = false;
var featureCarousel;
var featureIndex4 = 0;
var featureIndex3 = 0;
var featureIndex2 = 0;
var ww,wh;

function preload() {
  var queue = new createjs.LoadQueue();
  var preloadImages = [
    "images/_loading_bg.jpg",
    "images/_loading_shine.png",
    "images/_loading_slogan.png",
    "images/award.png",
    "images/BG_m.jpg",
    "images/BG_slider_m.png",
    "images/BG_slider.png",
    "images/BG.jpg",
    "images/btn.png",
    "images/fb_share_01.jpg",
    "images/hands.png",
    "images/knowledgeImg01.jpg",
    "images/knowledgeImg02.jpg",
    "images/knowledgeImg03.jpg",
    "images/mouthwash_01.png",
    "images/mouthwash_02.png",
    "images/mouthwash_m.png",
    "images/mouthwash.png",
    "images/pattern.png",
    "images/products.png",
    "images/toothbrush_01.png",
    "images/toothbrush_02.png",
    "images/toothbrush_03.png",
    "images/toothbrush_m.png",
    "images/toothbrush.png",
    "images/toothbrushChildren_m.png",
    "images/toothbrushChildren.png",
    "images/toothbrushX3_01.png",
    "images/toothbrushX3_02.png",
    "images/toothbrushX3_03.png",
    "images/toothbrushX3_m.png",
    "images/toothbrushX3.png",
    "images/toothpaste_01.png",
    "images/toothpaste_02.png",
    "images/toothpaste_03.png",
    "images/toothpaste_m.png",
    "images/toothpaste.png"
  ];
  queue.on("complete", function (event) {
    //console.log('Complete');
    setTimeout(function () {
      $('.loading').fadeOut(function () {
          $('body').removeClass('is-loading');
      });
    }, 500);
    setTimeout(function () {
        //doAnimate();
    }, 500);
  });
  queue.on("error", function (event) {
    console.log('Error');
  });
  queue.on("fileload", function (event) {
    //console.log('File loaded');
  });
  queue.on("progress", function (event) {
    var progress = Math.round(event.loaded * 100);

    //console.log('General progress', Math.round(event.loaded) * 100);
    $('.loading_status').text(progress + '%');
  });
  queue.loadManifest(preloadImages);
}
 
function resizeDo() {
  ww = window.innerWidth;
  wh = window.innerHeight;
  // console.log("ww:" + ww)
  // console.log("wh:" + wh)

  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // document.documentElement.style.setProperty('--vh', '${'+vh+'}px');

  if ((ww <= 768) && !isMobileStyle) {
    isMobileStyle = true;
    setFeatureCarousel();

  } else if (ww > 768 && isMobileStyle) {
    isMobileStyle = false;
    clearInterval(featureCarousel)
    $('.introduction .feature figure').css('display','inline-block');
  }
}

function doAnimate(){
    var controller = new ScrollMagic.Controller();

    // part01 start--------------------------
    
    TweenMax.set('.banner .pattern img', {x:-100,y:50,opacity:0})
    TweenMax.set('.banner .clayDoll', {y:100,opacity:0})
    TweenMax.set('.banner .products', {y:100,opacity:0,delay:-.5})

    var tween1 = new TimelineMax()
    .add(TweenMax.to('.banner .pattern img', .5, {x:0,y:0,opacity:1}))
    .add(TweenMax.to('.banner .clayDoll', .5, {y:0,opacity:1}))
    .add(TweenMax.to('.banner .products', .5, {y:0,opacity:1,delay:-.5}))

    // build scene
    var scene1 = new ScrollMagic.Scene({
      triggerElement: ".banner",
    //   duration: 500,
      offset: 0, //指標位移
      triggerHook: .5, // 觸發位置 0-1,onLeave,onCenter,onEnter
      reverse: false, //動畫重複 default:true
    })
      .setTween(tween1)
    //   .addIndicators({ name: "1 (duration: 0)" }) // 指標顯示
      .addTo(controller);
    // part01 end--------------------------

    // part02 start--------------------------

    TweenMax.set('.videos .wrapper', {y:100,opacity:0})

    var tween2 = new TimelineMax()
    .add(TweenMax.to('.videos .wrapper', .5, {y:0,opacity:1}))

    // build scene
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".videos",
    //   duration: 500,
      offset: 200, //指標位移
      triggerHook: .5, // 觸發位置 0-1,onLeave,onCenter,onEnter
      reverse: false, //動畫重複 default:true
    })
      .setTween(tween2)
      // .addIndicators({ name: "2 (duration: 0)" }) // 指標顯示
      .addTo(controller);
    // part02 end--------------------------

    // part03 start--------------------------

    TweenMax.set('.knowledgeSlider', {y:100,opacity:0})

    var tween3 = new TimelineMax()
    .add(TweenMax.to('.knowledgeSlider', .5, {y:0,opacity:1}))

    // build scene
    var scene3 = new ScrollMagic.Scene({
      triggerElement: ".knowledgeSlider",
    //   duration: 500,
      offset: -50, //指標位移
      triggerHook: .5, // 觸發位置 0-1,onLeave,onCenter,onEnter
      reverse: false, //動畫重複 default:true
    })
      .setTween(tween3)
      // .addIndicators({ name: "3 (duration: 0)" }) // 指標顯示
      .addTo(controller);
    // part03 end--------------------------

    // part04 start--------------------------

    TweenMax.set('.PD_slider', {y:100,opacity:0})

    var tween4 = new TimelineMax()
    .add(TweenMax.to('.PD_slider', .5, {y:0,opacity:1}))

    // build scene
    var scene4 = new ScrollMagic.Scene({
      triggerElement: ".PD_slider",
    //   duration: 500,
      offset: -50, //指標位移
      triggerHook: .5, // 觸發位置 0-1,onLeave,onCenter,onEnter
      reverse: false, //動畫重複 default:true
    })
      .setTween(tween4)
      // .addIndicators({ name: "4 (duration: 0)" }) // 指標顯示
      .addTo(controller);
    // part04 end--------------------------
}

function setOwl_product(){
    var owl = $('.product_wrapper').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        onTranslated:function(event){
            var page = event.page.index;     // Position of the current page
            console.log('page',page)
            if(page ===0){
              // console.log("牙膏")
              gtag('event', 'Click', {
                'event_category': '不做白工促淨會',
                'event_label': '牙膏',
              });
            }else if(page ===1){
              // console.log("牙刷")
              gtag('event', 'Click', {
                'event_category': '不做白工促淨會',
                'event_label': '牙刷',
              });
            }else if(page ===2){
              // console.log("無隱角系列牙刷")
              gtag('event', 'Click', {
                'event_category': '不做白工促淨會',
                'event_label': '無隱角系列牙刷',
              });
            }else if(page ===3){
              // console.log("兒童專業護理牙刷")
              gtag('event', 'Click', {
                'event_category': '不做白工促淨會',
                'event_label': '兒童專業護理牙刷',
              });
            }else if(page ===4){
              // console.log("漱口水")
              gtag('event', 'Click', {
                'event_category': '不做白工促淨會',
                'event_label': '漱口水',
              });
            }
            
            
            var nextIndex = (page+1+arrowArr.length)%arrowArr.length;
            $('section.introduction  a.btn_next p').html(arrowArr[nextIndex]);
            var prevIndex = (page-1+arrowArr.length)%arrowArr.length;
            $('section.introduction  a.btn_prev p').html(arrowArr[prevIndex]);
        }
    })
    $('section.introduction .PD_slider a.btn_next').on('click',function(e){
        e.preventDefault();
        owl.trigger('next.owl.carousel');
    })

    $('section.introduction .PD_slider a.btn_prev').on('click',function(e){
        e.preventDefault();
        owl.trigger('prev.owl.carousel');
    })
}

function setOwl_video(){
  var owl = $('.videoWrapper').owlCarousel({
      items:1,
      loop:true,
      margin:0,
      onTranslated:function(event){
        var page = event.page.index;     // Position of the current page
        $('.videosTitle_text').fadeOut();
        if(page ===0){
          $('.videosTitle_text:nth-of-type(1)').fadeIn();
        }else if(page ===1){
          $('.videosTitle_text:nth-of-type(2)').fadeIn();
        }else if(page ===2){
          $('.videosTitle_text:nth-of-type(3)').fadeIn();
        }
    }
  })
  $('section.videos  a.btn_next').on('click',function(e){
      e.preventDefault();
      owl.trigger('next.owl.carousel');
  })

  $('section.videos  a.btn_prev').on('click',function(e){
      e.preventDefault();
      owl.trigger('prev.owl.carousel');
  })
}

function setOwl_knowledge(){
  if (window.innerWidth>768) {
  $('.knowledgeWrapper .knowledge:odd').css('text-align','left').css('padding-right','0').css('padding-left','3%');
  $('.knowledgeWrapper .knowledge:odd .knowledgeBG').css('left','auto').css('right','3%');
  $('.knowledgeWrapper .knowledge:odd .contentBG').css('left','auto').css('right','0');
  $('.knowledgeWrapper .knowledge:odd .knowledgeTxt').css('left','auto').css('right','0');
  }
  
  var owl = $('.knowledgeWrapper').owlCarousel({
      items:1,
      loop:true,
      margin:30,
  })
  $('section.introduction .knowledgeSlider a.btn_next').on('click',function(e){
      e.preventDefault();
      owl.trigger('next.owl.carousel');
  })

  $('section.introduction .knowledgeSlider a.btn_prev').on('click',function(e){
      e.preventDefault();
      owl.trigger('prev.owl.carousel');
  })
}

function setFeatureCarousel(){
  featureCarousel = setInterval(function(){
      featureIndex4 = (featureIndex4+5)%4
      featureIndex3 = (featureIndex3+4)%3
      featureIndex2 = (featureIndex2+3)%2
      $('.featureFour figure:nth-of-type('+(featureIndex4+1)+')').fadeIn().siblings().fadeOut();
      $('.featureThree figure:nth-of-type('+(featureIndex3+1)+')').fadeIn().siblings().fadeOut();
      $('.featureTwo figure:nth-of-type('+(featureIndex2+1)+')').fadeIn().siblings().fadeOut();
  },4000)
}

$(document).ready(function(){
  preload();
  resizeDo();
  window.addEventListener('resize', resizeDo);

  //doAnimate();
  setOwl_product();
  setOwl_video();
  setOwl_knowledge();

  // $(window).scroll(function(){
  //   var target = $(window).scrollTop();
  //   if(isMobileStyle){
  //     $('.followBtn').stop().animate({'bottom':-target-60},600);
  //   }else{
  //     $('.followBtn').stop().animate({'bottom':-target+20},600);
  //   }
  // });

  $('.ham').click(function (e) { 
    e.preventDefault();
    $('.menu').toggleClass('show');
    $('.nav').slideToggle();
  });

  $('.video_action').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('section.videos .wrapper').offset().top - 50
    }, 800);
    $('.menu').removeClass('show');
    if (isMobileStyle) {
      $('.nav').slideUp();
    }
  });

  $('.knowledge_action').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('section.introduction .knowledgeSlider').offset().top - 50
    }, 800);
    $('.menu').removeClass('show');
    if (isMobileStyle) {
      $('.nav').slideUp();
    }
  });

  $('.product_action').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('section.introduction .PD_slider').offset().top - 50
    }, 800);
    $('.menu').removeClass('show');
    if (isMobileStyle) {
      $('.nav').slideUp();
    }
  });

})

