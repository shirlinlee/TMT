//news 內文字數
var pTxt = [];
var pTxtLimit = 75;
for (var i = 0; i < $(".newsTxt p").length; i++) {
  pTxt[i] = $(".newsTxt")
    .eq(i)
    .find("p")
    .text();
  // console.log(pTxt)
}

function kvTxt() {
  for (var i = 0; i < $(".newsTxt p").length; i++) {
    var pTxtN = pTxt[i].length;
    // console.log(pTxtN)
    if (pTxtN > pTxtLimit && $(window).width() <= 768) {
      pTxtC = pTxt[i].substr(0, 40);
      // console.log(pTxtC)
      $(".newsTxt")
        .eq(i)
        .find("p")
        .text(pTxtC + "...");
    } else {
      pTxtC = pTxt[i].substr(0, pTxtLimit);
      $(".newsTxt")
        .eq(i)
        .find("p")
        .text(pTxtC + "...");
      // $('.newsTxt').eq(i).find('p').text(pTxt[i])
    }
  }
}

let isMb = false;

$(window).ready(function() {
  initSlider();
});

$(window)
  .resize(function() {
    kvTxt();
    const ww = window.innerWidth;
    if (ww <= 720 && isMb == false) {
      initSlider();
      isMb = true;
    } else {
      $("#mbNav").slick("unslick");
      isMb = false;
    }
  })
  .resize();

function initSlider() {
  $("#mbNav").slick({
    dots: false,
    arrows: true,
    speed: 500,
    prevArrow:
      '<div class="sec-prev secBtn"><img src="images/arrow_2.png" alt=""></div>',
    nextArrow:
      '<div class="sec-next secBtn"><img src="images/arrow.png" alt=""></div>'
  });
}

//
$(".googleAD_kv > div:not(.gAd_KVCloseBtn)").mCustomScrollbar({
  axis: "x",
  theme: "minimal-dark"
});
$(".newsListBt > div").mCustomScrollbar({
  axis: "x",
  theme: "minimal-dark"
});
$(".sec_02 > div").mCustomScrollbar({
  axis: "x",
  theme: "minimal-dark"
});
