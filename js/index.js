$(function () {
  //KV
  $(".slick").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "linear",
    prevArrow:
      '<div class="slick-prev slickBtn"><img src="images/invalid-name.svg" alt=""></div>',
    nextArrow:
      '<div class="slick-next slickBtn"><img src="images/invalid-name_2.svg" alt=""></div>',
  });

  //KV 字數
  var pTxt = [];
  var pTxtLimit = 52;
  for (var i = 0; i < $(".slickTxt p").length; i++) {
    pTxt[i] = $(".slickTxt").eq(i).find("p").text();
    // console.log(pTxt)
  }

  function kvTxt() {
    for (var i = 0; i < $(".slickTxt p").length; i++) {
      var pTxtN = pTxt[i].length;
      // console.log(pTxtN)
      if (pTxtN > pTxtLimit && $(window).width() <= 480) {
        pTxtC = pTxt[i].substr(0, 52);
        // console.log(pTxt)
        $(".slickTxt")
          .eq(i)
          .find("p")
          .text(pTxtC + "...");
      } else {
        $(".slickTxt").eq(i).find("p").text(pTxt[i]);
      }
    }
  }
  $(window)
    .resize(function () {
      kvTxt();
    })
    .resize();

  //googleAd01
  $(".googleAd01 > div").mCustomScrollbar({
    axis: "x",
    theme: "minimal-dark",
  });

  $(".googleAd01OpenBtnBox").hide();
  $(".gAd01CloseBtn").on("click", function () {
    $(".googleAd01").hide();
    $(".googleAd01OpenBtnBox").show();
  });
  $(".googleAd01OpenBtn").on("click", function () {
    $(".googleAd01").show();
    $(".googleAd01OpenBtnBox").hide();
  });

  //sec_01
  var nowP = $(".nowP");
  var allPNum = $(".sec01Slick a").length;
  $(".allP").html(allPNum);
  $(".sec01Slick").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow:
      '<div class="sec-prev secBtn"><img src="images/arrow_2.png" alt=""></div>',
    nextArrow:
      '<div class="sec-next secBtn"><img src="images/arrow.png" alt=""></div>',
  });
  $(".sec01Slick").on("beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var nowPNum = nextSlide + 1;
    nowP.html(nowPNum);
  });

  //sec_02
  var scrollKey = {
    axis: "x",
    theme: "minimal-dark",
  };
  $(".sec_02 .tent > div").mCustomScrollbar({
    axis: "x",
    theme: "minimal-dark",
  });

  //  影音專區
  $(".videoSlick").slick({
    dots: false,
    arrows: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false, //不開會停止autoplay 0531
    // infinite: true,
    // autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    dotsClass: "custom_paging",
    customPaging: function (slider, i) {
      console.log(slider);
      return i + 1 + "/" + Math.ceil(slider.slideCount / 4);
    },
    prevArrow:
      '<div class="video-prev videoBtn"><span class="iconFont icon-cheveron-left"></span></div>',
    nextArrow:
      '<div class="video-next videoBtn"><span class="iconFont icon-cheveron-right"></span></div>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          customPaging: function (slider, i) {
            console.log(slider);
            return i + 1 + "/" + Math.ceil(slider.slideCount / 3);
          },
        },
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          customPaging: function (slider, i) {
            console.log(slider);
            return i + 1 + "/" + Math.ceil(slider.slideCount / 2);
          },
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ],
  });
  var current_id = null;

  $("body").on("click", ".video_slick", function () {
    var wanted_id = $(this).attr("data-id");
    var wanted_source = $(this).attr("data-source");
    if (current_id !== wanted_id) {
      console.log("in");
      $("#media_player").html(media(wanted_source, wanted_id));
      $(".video_slick").removeClass("seeing");
      $(".liveVideo").removeClass("ig .fb .yt").addClass(wanted_source);
      $(this).addClass("seeing");
      var current_id = wanted_id;
    }
  });
});

function media(media, id) {
  console.log(media, id);
  switch (media) {
    case "yt":
      return (
        '<iframe id="main_youtube" src="https://www.youtube.com/embed/' +
        id +
        '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      );
    case "ig": {
      return (
        '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/' +
        id +
        '/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12"></blockquote><script async src="//www.instagram.com/embed.js"></script>'
      );
    }

    default:
      return (
        '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F1611975482350171%2Fvideos%2F' +
        id +
        '%2F&show_text=0&width=267" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>'
      );
  }
}
