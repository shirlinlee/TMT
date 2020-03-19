//
$('.googleAD_kv > div:not(.gAd_KVCloseBtn)').mCustomScrollbar({
  axis: 'x',
  theme: 'minimal-dark',
});
$('.newsListBt > div').mCustomScrollbar({
  axis: 'x',
  theme: 'minimal-dark',
});
$('.sec_02 > div').mCustomScrollbar({
  axis: 'x',
  theme: 'minimal-dark',
});


//相關文章區
$('.slickRelatd').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  prevArrow: '<div class="rela-prev relaBtn"><span class="iconFont icon-cheveron-left"></div>',
  nextArrow: '<div class="rela-next relaBtn"><span class="iconFont icon-cheveron-right"></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: true
      }
    }
  ]
});

$(function(){
  var smbTxt = $('.smbTxt')
  var txtGrade
  // console.log(txtGrade)
  smbTxt.on('click', function(){
    smbTxt.removeClass('active')
    $(this).addClass('active')
    if(txtGrade!=undefined){
      $('.articleBox p, .articleBox figure').removeClass(txtGrade)
    }
    if($(this).hasClass('smbTxtB')){
      txtGrade = 'smbTxtB'
    }else if($(this).hasClass('smbTxtM')){
      txtGrade = 'smbTxtM'
    }else if($(this).hasClass('smbTxtS')){
      txtGrade = 'smbTxtS'
    }
    $('.articleBox p, .articleBox figure').addClass(txtGrade)
  });

  $(window).on('load', function(){
    detectPinInit()
  })

  var pinInit = false;

  $(window).on('resize', function(){
    detectPinInit()
  });

  function detectPinInit() {
    var ww = window.innerWidth > 540;
    var article_h = $('#article_content').height();
    var right_h = $('#right_content').height();
    console.log(ww, article_h, right_h);
    if( right_h - article_h >= 100 && ww && !pinInit) {
      pinInit = true;
      new $.Zebra_Pin($('.l_b'), {
        contain: true,
        top_spacing: 100,
        z_index: 10
      });
    }
    if(pinInit && !ww ){
      location.reload();
    }
  } 
  
})

