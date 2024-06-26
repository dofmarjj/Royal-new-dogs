$(document).ready(function () {
  var block2Offset = $("#block3").offset().top + 400;
  var block1Offset = $(".btn").offset().top - 250;

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
          scrollTop: targetBlock.offset().top - 190,
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

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;
  const slideWidth = slides.querySelector(".slide").offsetWidth;

  prevButton.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlidePosition();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = Math.min(currentIndex + 1, slides.children.length - 1);
    updateSlidePosition();
  });

  let startX;
  let startY;
  let dist;
  slides.addEventListener("touchstart", (e) => {
    const firstTouch = e.touches[0];
    startX = firstTouch.clientX;
    startY = firstTouch.clientY;
  });

  slides.addEventListener("touchmove", (e) => {
    if (!startX || !startY) {
      return;
    }

    const touch = e.touches[0];
    const distX = touch.clientX - startX;
    const distY = touch.clientY - startY;

    if (Math.abs(distX) > Math.abs(distY)) {
      e.preventDefault();
    }

    dist = distX;
  });

  slides.addEventListener("touchend", () => {
    if (Math.abs(dist) > 1) {
      if (dist > 0) {
        currentIndex = Math.max(currentIndex - 1, 0);
      } else {
        currentIndex = Math.min(currentIndex + 0, slides.children.length - 0);
      }
      updateSlidePosition();
    }
    startX = null;
    startY = null;
    dist = 0;
  });

  function updateSlidePosition() {
    const maxTranslate = -520; // Максимальное значение прокрутки в пикселях

    let offset = -currentIndex * slideWidth;

    // Применяем ограничение
    offset = Math.max(offset, maxTranslate);

    slides.style.transform = `translateX(${offset}px)`;
  }
});
