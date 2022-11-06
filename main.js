const menuIcon = document.querySelector(".menu__icon");
const headerNavigation = document.querySelector(".header__navigation");
const primaryHeader = document.querySelector(".primary__header");

menuIcon.addEventListener("click", () => {
  headerNavigation.hasAttribute("data-visible")
    ? menuIcon.setAttribute("aria-expanded", false)
    : menuIcon.setAttribute("aria-expanded", true);

  headerNavigation.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay")
});


const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: true,
  dots: true,
});

//