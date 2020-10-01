const $share = document.getElementById('share')
const $pop = document.getElementById('pop')

let click = 0

$share.addEventListener('click', () => {
  if(click % 2 === 0){
    $pop.classList.add('appear')
  }else{
    $pop.classList.remove('appear')
  }
  click++
})

