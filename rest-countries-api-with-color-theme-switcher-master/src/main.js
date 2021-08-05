const $cards = document.querySelector('.cards')
const $header = document.querySelector('.header')
const $selection = document.querySelector('.selectSection')
const $darkMode = document.querySelector('.header__darkMode')
const $input = document.getElementById('input')
const $card = document.querySelector('.cards__card');


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


// const getCountriesName = (name) => {
//   return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
//   .then(res => res.json())
//   .then(data => {

//     data.forEach(element => {
//       $cardId.innerHTML += `
//         <div class="cards__card">
//           <img class="cards__flag" src="${element.flag}" alt="drapeau">
//           <div class="cards__infoCountry">
//             <h2 class="cards__name">${element.name}</h2>
//             <p"><strong>Population : </strong>${element.population}</p>
//             <p><strong>Region : </strong>${element.region}</p>
//             <p><strong>Capital : </strong>${element.capital}</p>
//           </div>
//         </div>
//       `
//     });
//   })
//   .catch(err => {
//     console.log(err.Response.data.message)
//   })
// }

// getCountriesName()


$input.addEventListener('input', (e) => {
  console.log(e.target.value)

  if(e.target.value){
    return fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
    .then(res => res.json())
    .then(data => {
  
      console.log(data)
  
      data.forEach(element => {
        $cards.innerHTML = `
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
  }else{
    return getCountries()
  }
})


// darkMode 

$darkMode.addEventListener('click', () => {
  $cards.classList.toggle('dark')
  $selection.classList.toggle('dark')
  $header.classList.toggle('dark')
})

