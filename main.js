const menuIcon = document.querySelector(".menu__icon");
const headerNavigation = document.querySelector(".header__navigation");

menuIcon.addEventListener("click", () => {
  headerNavigation.hasAttribute("data-visible")
    ? menuIcon.setAttribute("aria-expanded", false)
    : menuIcon.setAttribute("aria-expanded", true);

  headerNavigation.toggleAttribute("data-visible");
});

//
