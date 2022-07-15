const hamburgerButton = document.getElementById('burger-button')
const menu = document.getElementById('mobile-menu')
const bodyPage = document.getElementById('body-page')

hamburgerButton.addEventListener('click', toogleBurger)

function toogleBurger() {
  menu.classList.toggle('active')
  hamburgerButton.classList.toggle('active')
  bodyPage.classList.toggle('lock')
}





// $(document).ready(function () {
//   $('.header__burger').click(function (event) {
//     $('.header__burger, .header__menu').toggleClass('.active');
//   })
// });