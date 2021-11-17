const headerMenuMobile = document.querySelector(".header__menu-mobile")
const NavMobileLinks = document.querySelectorAll(".header__menu-mobile-a")
const burgerBtn = document.querySelector(".burger-btn")
const footerYear = document.querySelector(".footer__year")
const scrollToTopBtn = document.querySelector(".scrollToTopBtn")
const navScroll = document.querySelector(".scroll-nav")
const nav = document.querySelector(".nav")
const hire = document.querySelector(".hire")

// NAV MOBILE
const handleNav = () => {
  headerMenuMobile.classList.toggle("mobile--active")

  NavMobileLinks.forEach(item => {
    item.addEventListener("click", () => {
      headerMenuMobile.classList.remove("mobile--active")
    })
  })
}
burgerBtn.addEventListener("click", handleNav)

// NAV MOBILE

function handleCurrentYear() {
  const year = new Date().getFullYear()
  footerYear.innerText = year
}
handleCurrentYear()

window.onload = function () {
  if (
    document.querySelectorAll(".progress").length > 0 &&
    document.querySelectorAll(".progress [data-progress]").length > 0
  ) {
    // Get all elements with 'data-progress' attribute and run the 'AnimateProgress' funcion with each one
    document
      .querySelectorAll(".progress [data-progress]")
      .forEach(x => AnimateProgress(x))
  }
}

function AnimateProgress(el) {
  // Get the element that came as parameter and add the class 'animated-progress' on it
  el.className = "animate-progress"
  // Set the attribute 'style' of this element with the custom attribute '--animate-progress' and the value of 'data-progress' as the width value
  el.setAttribute(
    "style",
    `--animate-progress:${el.getAttribute("data-progress")}%;`
  )
  // After this the CSS make its magic
}

const handleButton = () => {
  scrollToTopBtn.classList.toggle("visible", window.scrollY > 300),
    nav.classList.toggle("scroll-nav", window.scrollY > 100)
}
window.addEventListener("scroll", handleButton)
