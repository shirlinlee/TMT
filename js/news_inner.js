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
  })
})