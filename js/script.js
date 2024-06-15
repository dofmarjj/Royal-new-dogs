$(document).ready(function () {
  var block2Offset = $("#block3").offset().top + 400;
  var block1Offset = $(".btn").offset().top - 350;

  // Скрываем кнопку "Подняться наверх"
  $("#scrollTopBtn").hide();

  // Показать/скрыть кнопку "Подняться наверх" при достижении блока
  $(window).scroll(function () {
    if ($(this).scrollTop() > block1Offset) {
      $("#scrollTopBtn").addClass("fix");
    } else {
      $("#scrollTopBtn").removeClass("fix");
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > block2Offset) {
      $("#scrollTopBtn").fadeIn();
    } else {
      $("#scrollTopBtn").fadeOut();
    }
  });

  // Плавная прокрутка к якорю с отступом сверху

  $('a[href*="#"]').click(function (e) {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(this.hash).offset().top - 100,
        },
        1000
      );
    e.preventDefault();
  });
});

$(document).ready(function () {
  $(".burger-menu").click(function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
    $(".overlay").toggleClass("active");
    $("html").toggleClass("no-scroll");
  });

  $(".menu li a").click(function () {
    var targetBlock = $($(this).attr("href"));
    if (targetBlock.length) {
      $("html, body").animate(
        {
          scrollTop: targetBlock.offset().top - 100,
        },
        1000
      );
    }
    $(".burger-menu").removeClass("active");
    $(".menu").removeClass("active");
    $(".overlay").removeClass("active");
    $("html").removeClass("no-scroll");
  });
});

$(document).ready(function () {
  $(".menu__link").click(function () {
    $(".menu__link.active__btn").not(this).removeClass("active__btn"); // Remove 'active' class from other buttons
    $(this).addClass("active__btn");
  });
});

// Full

// Or with jQuery

$(document).ready(function () {
  $(".materialboxed").materialbox();
});
