$(function () {

  //KV
  $('.slick').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<div class="slick-prev slickBtn"><img src="images/invalid-name.svg" alt=""></div>',
    nextArrow: '<div class="slick-next slickBtn"><img src="images/invalid-name_2.svg" alt=""></div>'
  });

  //KV 字數
  var pTxt = []
  var pTxtLimit = 52
  for (var i = 0; i < $('.slickTxt p').length; i++) {
    pTxt[i] = $('.slickTxt').eq(i).find('p').text()
    // console.log(pTxt)
  }

  function kvTxt() {
    for (var i = 0; i < $('.slickTxt p').length; i++) {
      var pTxtN = pTxt[i].length
      // console.log(pTxtN)
      if (pTxtN > pTxtLimit && $(window).width() <= 480) {
        pTxtC = pTxt[i].substr(0, 52)
        // console.log(pTxt)
        $('.slickTxt').eq(i).find('p').text(pTxtC + '...')
      } else {
        $('.slickTxt').eq(i).find('p').text(pTxt[i])
      }
    }
  }
  $(window).resize(function () {
    kvTxt()
  }).resize()

  //googleAd01
  $('.googleAd01 > div').mCustomScrollbar({
    axis: 'x',
    theme: 'minimal-dark',
  });

  $('.googleAd01OpenBtnBox').hide()
  $('.gAd01CloseBtn').on('click', function(){
    $('.googleAd01').hide()
    $('.googleAd01OpenBtnBox').show()
  })
  $('.googleAd01OpenBtn').on('click', function(){
    $('.googleAd01').show()
    $('.googleAd01OpenBtnBox').hide()
  })

  //sec_01
  var nowP = $('.nowP')
  var allPNum = $('.sec01Slick a').length
  $('.allP').html(allPNum)
  $('.sec01Slick').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<div class="sec-prev secBtn"><img src="images/arrow_2.png" alt=""></div>',
    nextArrow: '<div class="sec-next secBtn"><img src="images/arrow.png" alt=""></div>'
  });
  $('.sec01Slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var nowPNum = nextSlide + 1
    nowP.html(nowPNum)
  })


  //sec_02
  var scrollKey = {
    axis: 'x',
    theme: 'minimal-dark'
  }
  $('.sec_02 .tent > div').mCustomScrollbar({
    axis: 'x',
    theme: 'minimal-dark',
  });


})