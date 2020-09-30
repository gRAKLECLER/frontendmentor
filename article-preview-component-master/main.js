const $share = document.getElementById('share')
const $pop = document.getElementById('pop')


$share.addEventListener('mouseover', () => {
  $pop.classList.add('appear')
})

$share.addEventListener('mouseleave', () => {
  $pop.classList.remove('appear')
})