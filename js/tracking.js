

$(document).ready(function(){
  $('#headerLogo').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '細潔商品頁',
    });
  });
  $('#officialFB').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '細潔FB',
    });
  });
  $('.introduction .PD_slider .bigBtn').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': '立即入手',
    });
  });

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
  $('#followBtn').click(function () {
    gtag('event', 'Click', {
      'event_category': '不做白工促淨會',
      'event_label': 'follow鈕',
    });
  });
})