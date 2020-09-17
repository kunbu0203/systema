
var arrowArr = ['適齦佳<span>牙膏</span>','無隱角EX<span>牙刷</span>','無隱角<span>系列牙刷</span>','兒童專業<span>護理牙刷</span>','適齦佳<span>漱口水</span>'];
var isMobileStyle = false;
var featureCarousel;
var featureIndex4 = 0;
var featureIndex3 = 0;
var featureIndex2 = 0;
var ww,wh;

function preload() {
  var queue = new createjs.LoadQueue();
  var preloadImages = [
    "images/BG_bottom_mb.png",
    "images/BG_bottom.png",
    "images/BG_m.jpg",
    "images/BG_slider_m.png",
    "images/BG_slider.png",
    "images/blackboard.png",
    "images/blackboard_mob.png",
    "images/BG.jpg",
    "images/codeBox.png",
    "images/doctor.png",
    "images/dollx2.png",
    "images/exam_doctor.png",
    "images/exam_doctor_good.png",
    "images/exam_doctor02.png",
    "images/exam_dolls_allWrong.png",
    "images/exam_dolls_wrong.png",
    "images/exam_man.png",
    "images/exam_msg_coupon.png",
    "images/exam_msg_coupon_mob.png",
    "images/exam_title.png",
    "images/fb_share.jpg",
    "images/hands.png",
    "images/knowledgeImg01.jpg",
    "images/knowledgeImg02.jpg",
    "images/knowledgeImg03.jpg",
    "images/knowledgeImg04.jpg",
    "images/knowledgeImg05.jpg",
    "images/knowledgeImg06.jpg",
    "images/knowledgeImg07.jpg",
    "images/knowledgeTitle.png",
    "images/loading_bg_mb.jpg",
    "images/loading_bg.jpg",
    "images/loading_shine.png",
    "images/loading_slogan.png",
    "images/mouthwash_m.png",
    "images/mouthwash.png",
    "images/pattern.png",
    "images/products_m.png",
    "images/ribbonLeft.png",
    "images/ribbonRight.png",
    "images/products.png",
    "images/toothbrush_m.png",
    "images/toothbrush.png",
    "images/toothbrushChildren_m.png",
    "images/toothbrushChildren.png",
    "images/toothbrushX3_m.png",
    "images/toothbrushX3.png",
    "images/toothpaste_m.png",
    "images/toothpaste.png",
    "images/video_BG.jpg",
    "images/video_BG.png",
    "images/video_BG_mob.png"
  ];
  queue.on("complete", function (event) {
    //console.log('Complete');
    setTimeout(function () {
      $('.loading').fadeOut(function () {
          $('body').removeClass('is-loading');
      });
    }, 500);
    setTimeout(function () {
        doAnimate();
    }, 750);
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

  // var vh = window.innerHeight * 0.01;
  // // document.documentElement.style.setProperty('--vh', `${vh}px`);
  // document.documentElement.style.setProperty('--vh', '${'+vh+'}px');

  if ((ww <= 768) && !isMobileStyle) {
    isMobileStyle = true;
    setFeatureCarousel();
    $('.nav').css('display','none');
    $('.menu').removeClass('show');
  } else if (ww > 768 && isMobileStyle) {
    isMobileStyle = false;
    $('.nav').css('display','block');
    clearInterval(featureCarousel)
    $('.introduction .feature figure').css('display','inline-block');
  }
}

function doAnimate(){
    var controller = new ScrollMagic.Controller();

    // start--------------------------
    
    TweenMax.set('header .menu .menu_bg', {x:0,y:0,opacity:0})

    var tween = new TimelineMax()
    .add(TweenMax.to('header .menu .menu_bg', .3, {x:0,y:0,opacity:.85}))

    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: ".profession",
    //   duration: 500,
      offset: 0, //指標位移
      triggerHook: 0, // 觸發位置 0-1,onLeave,onCenter,onEnter
      reverse: true, //動畫重複 default:true
    })
      .setTween(tween)
      // .addIndicators({ name: "0 (duration: 0)" }) // 指標顯示
      .addTo(controller);
    // end--------------------------

    // part01 start--------------------------
    
    TweenMax.set('.banner .pattern', {x:0,y:-50,scale:1.5,opacity:0})
    TweenMax.set('.banner .doctor img', {y:100,opacity:0})
    TweenMax.set('.banner .products img', {y:100,opacity:0,delay:-.5})
    TweenMax.set('.banner .dollx2 img', {y:100,opacity:0,delay:-.5})

    var tween1 = new TimelineMax()
    .add(TweenMax.to('.banner .pattern', .5, {x:0,y:0,scale:1,opacity:1}))
    .add(TweenMax.to('.banner .doctor img', .5, {y:0,opacity:1}))
    .add(TweenMax.to('.banner .products img', .5, {y:0,opacity:1,delay:-.5}))
    .add(TweenMax.to('.banner .dollx2 img', .5, {y:0,opacity:1,delay:-.5}))

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

    TweenMax.set('.exam .wrapper', {y:100,opacity:0})

    var tween2 = new TimelineMax()
    .add(TweenMax.to('.exam .wrapper', .5, {y:0,opacity:1}))
    .eventCallback("onComplete", setNum)

    // build scene
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".exam",
    //   duration: 500,
      offset: 200, //指標位移
      triggerHook: .5, // 觸發位置 0-1,onLeave,onCenter,onEnter
      reverse: false, //動畫重複 default:true
    })
      .setTween(tween2)
      // .addIndicators({ name: "2 (duration: 0)" }) // 指標顯示
      .addTo(controller);
    // part02 end--------------------------

    // part02_2 start--------------------------

    TweenMax.set('.videos .wrapper', {y:100,opacity:0})

    var tween2_2 = new TimelineMax()
    .add(TweenMax.to('.videos .wrapper', .5, {y:0,opacity:1}))

    // build scene
    var scene2_2 = new ScrollMagic.Scene({
      triggerElement: ".videos",
    //   duration: 500,
      offset: 0, //指標位移
      // triggerHook: .5, // 觸發位置 0-1,onLeave,onCenter,onEnter
      reverse: false, //動畫重複 default:true
    })
      .setTween(tween2_2)
      // .addIndicators({ name: "2 (duration: 0)" }) // 指標顯示
      .addTo(controller);
    // part02_2 end--------------------------

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
            //console.log('page',page)
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
  $('.videos  a.btn_next').on('click',function(e){
      e.preventDefault();
      owl.trigger('next.owl.carousel');
  })

  $('.videos  a.btn_prev').on('click',function(e){
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
      onTranslated:function(event){
        var page = event.page.index;     // Position of the current page
        //console.log('page',page)
        if(page ===0){
          // console.log("冷知識#1")
          gtag('event', 'Click', {
            'event_category': '不做白工促淨會',
            'event_label': '冷知識#1',
          });
        }else if(page ===1){
          // console.log("冷知識#2")
          gtag('event', 'Click', {
            'event_category': '不做白工促淨會',
            'event_label': '冷知識#2',
          });
        }else if(page ===2){
          // console.log("冷知識#3")
          gtag('event', 'Click', {
            'event_category': '不做白工促淨會',
            'event_label': '冷知識#3',
          });
        }else if(page ===3){
          // console.log("冷知識#4")
          gtag('event', 'Click', {
            'event_category': '不做白工促淨會',
            'event_label': '冷知識#4',
          });
        }else if(page ===4){
          // console.log("冷知識#5")
          gtag('event', 'Click', {
            'event_category': '不做白工促淨會',
            'event_label': '冷知識#5',
          });
        }else if(page ===5){
          // console.log("冷知識#6")
          gtag('event', 'Click', {
            'event_category': '不做白工促淨會',
            'event_label': '冷知識#6',
          });
        }
      }
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

  $('.exam_action').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.exam .wrapper').offset().top
    }, 800);
    $('.menu').removeClass('show');
    if (isMobileStyle) {
      $('.nav').slideUp();
    }
  });

  $('.video_action').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.videos .wrapper').offset().top - 100
    }, 800);
    $('.menu').removeClass('show');
    if (isMobileStyle) {
      $('.nav').slideUp();
    }
  });

  $('.knowledge_action,.examBtn.review').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('section.introduction .knowledgeSlider').offset().top - 100
    }, 800);
    $('.menu').removeClass('show');
    if (isMobileStyle) {
      $('.nav').slideUp();
    }
  });

  $('.product_action').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('section.introduction .PD_slider').offset().top - 100
    }, 800);
    $('.menu').removeClass('show');
    if (isMobileStyle) {
      $('.nav').slideUp();
    }
  });

})

