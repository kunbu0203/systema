$(document).ready(function(){
  // menu
  $('#headerLogo').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '細潔商品頁',
    });
  });
  $('.video_action').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '影音專區',
    });
  });
  $('.knowledge_action').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '冷知識',
    });
  });
  $('.product_action').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '商品專區',
    });
  });
  $('#officialFB').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '細潔FB',
    });
  });

  //大會考
  $('.examBtn.start').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '立即挑戰',
    });
  });
  $('.message.start').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': 'intro',
    });
  });
  $('.examBtn.review').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '複習考題',
    });
  });
  $('.copy').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '官網優惠券',
    });
  });
  $('.method').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '活動辦法',
    });
  });
  $('.examMethod .popupClose').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '關閉活動辦法',
    });
  });
  $('.examBtn.lionOnlineShop').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '導獅王官網',
    });
  });
  $('.examBtn.tryAgain').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '再次挑戰',
    });
  });
  $('.copy').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '下載優惠碼',
    });
  });


  $('.introduction .PD_slider .bigBtn').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '立即入手',
    });
  });


  // footer
  $('#footerLogo').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '獅王官網',
    });
  });
  $('#footerEC').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '獅王旗艦館',
    });
  });
  $('#footerFB').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': 'FB',
    });
  });
  $('#footerYT').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': 'YT',
    });
  });
  $('#footerIG').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': 'IG',
    });
  });


  // $('#followBtn').click(function () {
  //   gtag('event', 'Click', {
  //     'event_category': '不做白工促淨會',
  //     'event_label': 'follow鈕',
  //   });
  // });
})