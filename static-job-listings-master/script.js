const $card =  document.getElementById('card')

fetch('data.json')
.then(Response => Response.json())
.then(data => {

  console.log(data)
  const $data = data

  $data.forEach(element => {
    $card.innerHTML += `
      <div class="cards">
        <div class="cards__upInfo">
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
        <div>
          <p>${element.role}</p>
          <p>${element.level}</p>
          <p>${element.languages}</p>
          <p>${element.tools}</p>
        </div>
      </div>
    `
  });
  
})

