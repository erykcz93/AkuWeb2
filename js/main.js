const headerMenuMobile = document.querySelector(".header__menu-mobile")
const burgerBtn = document.querySelector(".burger-btn")

const handleNav = () => {
  headerMenuMobile.classList.toggle("menu--active")
}

burgerBtn.addEventListener("click", handleNav)
