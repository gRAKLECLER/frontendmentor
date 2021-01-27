const $card =  document.getElementById('card')

fetch('data.json')
.then(Response => Response.json())
.then(data => {

  const $data = data

  $data.forEach(element => {
    $card.innerHTML += `
      <div class="cards">
        <div class="cards__upInfo">
        <img class="cards__logo" src="${element.logo}">
          <div class="cards__title">
            <p>${element.company}</p>
            <p>NEW!</p>
            <p>FEATURED</p>
          </div>
          <h3>${element.position}</h3>
          <div class="cards__suppInfo">
            <p>${element.postedAt}</p>
            <p>${element.contract}</p>
            <p>${element.location}</p>
          </div>
        </div>
        <hr/>
        <div class="cards__tech">
          <p class="cards__techs">${element.role}</p>
          <p class="cards__techs">${element.level}</p>
          <p class="cards__techs">${element.languages}</p>
          <p class="cards__techs">${element.tools}</p>
        </div>
      </div>
    `
  });
  
})

