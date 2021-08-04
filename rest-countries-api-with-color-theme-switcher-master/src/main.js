const $cards = document.querySelector('.cards')
const $cardId = document.getElementById('cards__cardId')
const $card = document.querySelectorAll('.cards__card');

const getCountries = () => {
  return fetch('https://restcountries.eu/rest/v2/all')
  .then(Response => Response.json())
  .then(data => {
    // console.log(data)

    data.forEach(element => {
      $cards.innerHTML += `
        <div class="cards__card">
          <img class="cards__flag" src="${element.flag}" alt="drapeau">
          <div class="cards__infoCountry">
            <h2 class="cards__name">${element.name}</h2>
            <p"><strong>Population : </strong>${element.population}</p>
            <p><strong>Region : </strong>${element.region}</p>
            <p><strong>Capital : </strong>${element.capital}</p>
          </div>
        </div>
      `
    });
  })
}

getCountries()


const getCountriesName = () => {
  return fetch(`https://restcountries.eu/rest/v2/name/Albania`)
  .then(res => res.json())
  .then(data => {

    data.forEach(element => {
      $cardId.innerHTML += `
        <div class="cards__card">
          <img class="cards__flag" src="${element.flag}" alt="drapeau">
          <div class="cards__infoCountry">
            <h2 class="cards__name">${element.name}</h2>
            <p"><strong>Population : </strong>${element.population}</p>
            <p><strong>Region : </strong>${element.region}</p>
            <p><strong>Capital : </strong>${element.capital}</p>
          </div>
        </div>
      `
    });
  })
  .catch(err => {
    console.log(err.Response.data.message)
  })
}

// getCountriesName()
