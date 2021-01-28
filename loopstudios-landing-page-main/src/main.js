const $burger = document.querySelector('.hero__burgerContainer')
const $nav = document.querySelector('.hero__headerNav')

$burger.addEventListener('click', () => {
  $nav.classList.toggle('appear')
})