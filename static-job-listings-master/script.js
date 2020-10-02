const $card = document.getElementById('card')

function getData(){
  fetch("/data.json")
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    const DATA = data.map(item => {
      if(item.new === true){
        return `
        <div class="cards">
          <img class="cardImg" src="${item.logo}" alt="">
          <div class="name">
            <p class="companyName">${item.company}</p>
            <p>NEW!</p>
          </div>
          <p class="companyPosition">${item.position}</p>
          <div class="post">
            <p>${item.postedAt}</p>
            <p>${item.contract}</p>
            <p>${item.location}</p>
          </div>
          <hr>
          <div class="filters">
            <p>${item.role}</p>
            <p>${item.level}</p>
            <p>${item.languages}</p>
            <p>${item.tools}</p>
          </div
        </div>
        `
      }else if (item.new === true && item.featured === true){
        return `
            <img src="${item.logo}" alt="">
            <p>${item.company}</p>
            <p>${item.position}</p>
            <p>NEW!</p>
            <p>FEATURED</p>
        `
      }
      else{
        return `
        <div class="cards">
          <img class="cardImg" src="${item.logo}" alt="">
          <p class="companyName">${item.company}</p>
          <p class="companyPosition">${item.position}</p>
          <div class="post">
            <p>${item.postedAt}</p>
            <p>${item.contract}</p>
            <p>${item.location}</p>
          </div>
          <hr>
          <div class="filters">
            <p>${item.role}</p>
            <p>${item.level}</p>
            <p>${item.languages}</p>
            <p>${item.tools}</p>
        </div
        </div>
        `
      }
      }).join('');
    $card.innerHTML = DATA
  })
}

getData()