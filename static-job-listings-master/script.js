const $card = document.getElementById('card')

function getData(){
  fetch("/data.json")
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    const DATA = data.map(item => {
    return`
        <img class="imgBG" src="${item.logo}" alt="">
        <p>${item.id}</p>
        <p>${item.company}</p>
        <p>${item.position}</p>
        console.log(item)
        `
      }).join('');
    $card.innerHTML = DATA
  })
}

getData()