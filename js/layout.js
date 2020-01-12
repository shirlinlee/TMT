$(function() {
  //主選單
  var moreBtn = $(".moreBtn");
  var secNavListBox = $(".secNavListBox");
  moreBtn.on("click", function() {
    var userAG = navigator.userAgent;
    if (!$(this).hasClass("open")) {
      if (userAG.indexOf("Mobile") != -1) {
        stopBodyScroll(true);
      }

      $(this).addClass("open");
      secNavH();
      $(".navList, nav, .navBox").addClass("open");
      $(".navList")
        .find(".firstUl")
        .addClass("hide");
      secNavListBox.stop(true).slideDown(350);
    } else {
      if (userAG.indexOf("Mobile") != -1) {
        stopBodyScroll(false);
      }
      $(this).removeClass("open");
      $(".navList, nav, .navBox").removeClass("open");
      $(".navList")
        .find(".firstUl")
        .removeClass("hide");
      secNavListBox.slideUp(150);
    }
  });

  let bodyEl = document.body;
  let top = 0;

  function stopBodyScroll(isFixed) {
    if (isFixed) {
      top = window.scrollY;

      bodyEl.style.position = "fixed";
      bodyEl.style.top = -top + "px";
    } else {
      bodyEl.style.position = "";
      bodyEl.style.top = "";

      window.scrollTo(0, top); // 回到原先的top
    }
  }

  // $.fn.scrollUnique = function () {
  //   return $(this).each(function () {
  //     var eventType = 'mousewheel';
  //     // firefox 是DOMMouseScroll事件
  //     if (document.mozHidden !== undefined) {
  //       eventType = 'DOMMouseScroll';
  //     }
  //     $(this).on(eventType, function (event) {
  //       // 一些數據
  //       var scrollTop = this.scrollTop,
  //         scrollHeight = this.scrollHeight,
  //         height = this.clientHeight;

  //       var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);

  //       if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
  //         // IE滾動會跨越邊界直接影響父级滚動，因此，臨界時候手動邊界滚動定位
  //         this.scrollTop = delta > 0 ? 0 : scrollHeight;
  //         // 向上滚 || 向下滚
  //         event.preventDefault();
  //       }
  //     });
  //   });
  // };
  // $('.secNavListBox > div').scrollUnique();

  var $body = window.opera
    ? document.compatMode == "CSS1Compat"
      ? $("html")
      : $("body")
    : $("html,body");

  function noScroll() {
    var x;
    var v = $body.scrollTop();
    console.log(v);

    // $body.animate({
    //   scrollTop: x[0]
    // }, 0);
  }

  function keepScroll() {
    $(document).off("scroll");
  }

  //次選單
  $(".secNavListBox > div").mCustomScrollbar({
    theme: "minimal-dark"
  });

  function secNavH() {
    var winH = $(window).height();
    var headH = $("header").height();
    var navH = $(".navBox").height();
    var finH = winH - headH - navH;
    if (moreBtn.hasClass("open")) {
      $(".secNavListBox > div").css({
        "max-height": finH
      });
      // console.log(finH)
    }
  }
  var clickArr = $(".clickArr");
  clickArr.on("click", function(e) {
    e.preventDefault();
    if (!$(this).hasClass("open")) {
      clickArr.removeClass("open");
      $(this).addClass("open");
      $(".trdNavList").slideUp(150);
      $(".secNavList>li").removeClass("sDown");
      $(this)
        .parents(".secNavList>li")
        .addClass("sDown");
      $(this)
        .parents(".secNavList>li")
        .find(".trdNavList")
        .stop(true)
        .slideDown(250);
    } else {
      $(this).removeClass("open");
      $(this)
        .parents(".secNavList>li")
        .removeClass("sDown");
      $(this)
        .parents(".secNavList>li")
        .find(".trdNavList")
        .slideUp(150);
    }
  });

  //社群連結
  var winTop,
    socialMContainer = $(".hdTop");

  function socialLinks() {
    var winW = $(window).width();
    var tentW = socialMContainer.width();
    var socialR = (winW - tentW) / 2;
    if (winW > 1380) {
      socialR = socialR - 30;
    } else {
      socialR = socialR + 10;
    }
    $(".socialMedia.pc").css({
      right: socialR
    });
    // console.log(socialR)
  }

  //側欄選單顏色變化
  function mediaLinkColor() {
    var mediaLink = $(".socialMedia.pc .mediaLink");
    var kvT = $(".kv").offset().top;
    var kvH = $(".kv").height();
    var kv02T = $(".kv02").offset().top;
    var kv02H = $(".kv02").height();
    mediaLink.each(function() {
      var scoT = $(this).offset().top;
      // console.log(kvT)
      if (scoT > kvT && scoT < kvT + kvH) {
        $(this).addClass("white");
      } else if (scoT > kv02T && scoT < kv02T + kv02H) {
        $(this).addClass("white");
      } else {
        $(this).removeClass("white");
      }
    });
  }

  //選單 fix 在 top
  function navBoxFixT() {
    winTop = $(window).scrollTop();
    // var navOfT = $('.kv').offset().top
    //console.log(winTop)
    if (winTop == 0) {
      $("header, .navBox").removeClass("fixT");
    } else if (winTop != 0 && !$("header").hasClass("fixT")) {
      $("header, .navBox").addClass("fixT");
    }
  }

  //小選單打開
  $(".firstUl")
    .on("mouseenter", function() {
      if (!$(this).hasClass("downD")) {
        $(this).addClass("downD");
        $(this)
          .find(".inList")
          .stop(true)
          .slideDown(200);
      }
    })
    .on("mouseleave", function() {
      $(this).removeClass("downD");
      $(this)
        .find(".inList")
        .slideUp(150);
    });

  $(window)
    .on("scroll", function() {
      navBoxFixT();
      mediaLinkColor();
      secNavH();
      goTopBtnHide();
    })
    .scroll();

  $(window)
    .on("resize", function() {
      winTop = $(window).scrollTop();
      socialLinks();
      secNavH();
    })
    .resize();

  //m版 search bar
  $(".searchClick, .search_icon").on("click", function() {
    if (!$(this).hasClass("clicked")) {
      $(this)
        .parent(".searchBox")
        .addClass("open");
      $(this).addClass("clicked");
    } else {
      $(this)
        .parent(".searchBox")
        .removeClass("open");
      $(this).removeClass("clicked");
    }
  });

  $(".close.mb").on("click", function() {
    $(this)
      .parent(".searchBox")
      .removeClass("open");
    $(".searchClick, .search_icon").removeClass("clicked");
  });

  // goTopBtn
  $(".goTopBtn").click(function() {
    var $body = window.opera
      ? document.compatMode == "CSS1Compat"
        ? $("html")
        : $("body")
      : $("html,body");
    $body.animate(
      {
        scrollTop: $("#main").offset().top
      },
      800
    );

    return false;
  });

  function goTopBtnHide() {
    var middleH = $(".wrapper").height() / 3;
    // console.log(middleH)
    if ($(window).scrollTop() <= middleH) {
      $(".goTopBtn").fadeOut(300);
    } else {
      $(".goTopBtn").fadeIn(200);
    }
  }
});
