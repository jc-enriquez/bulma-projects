//Navbar
document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

//Isotope JS
const $isotopeChecker = $(".isotope-container").isotope({
  itemSelector: ".isotope-element",
  layoutMode: "fitRows",
});

$("#isotope-filters").on("click", "div", function () {
  let filterValue = $(this).attr("data-filter");
  $isotopeChecker.isotope({ filter: filterValue });
});

$(".button-group").each(function (i, buttonGroup) {
  let $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "div", function () {
    $buttonGroup.find(".is-selected").removeClass("is-selected");
    $(this).addClass("is-selected");
  });
});

//Slick JS
$(".testimonial-slider").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".previous-button"),
  nextArrow: $(".next-button"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

let scrollButton = document.getElementById("scroll-button");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

$("a[href='#top']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
