//Variables
var totalCases = document.getElementById("totalCases")
var newCases = document.getElementById("newCases")
var totalDeaths = document.getElementById("totalDeaths")
var newDeaths = document.getElementById("newDeaths")
var population = document.getElementById("population")
var statCaption = document.getElementById('stat__caption')
//Get Method from CovidActNow
var API_key = "bef296005bd846e784d632e6d304a610"
var cbsa_code = "42340"
var url = `https://api.covidactnow.org/v2/cbsa/${cbsa_code}.json?apiKey=${API_key}`
console.log(url)

//Getting data from covidactnow API
fetch(url, {
	method: 'GET'
})

.then(response => response.json())

.then(json=>{

	console.log(json.population);

  //Total Population
  population.innerHTML = `Total Population: ${json.population}`;

	console.log(json.actuals.cases);
  //Total and New Cases in Savannah Metro
  totalCases.innerText ="Total: " + json.actuals.cases;
  newCases.innerText = "New: " + json.actuals.newCases; 
  
  //Total and New Death in Savannah Metro
  totalDeaths.innerText = "Total: " + json.actuals.deaths;
  newDeaths.innerText = "New: " + json.actuals.newDeaths;

  //Stat caption
  statCaption.innerText = `Updated: ${json.lastUpdatedDate}`;

})
.catch(error=> console.log('Error:', error))



//Getting Data from Gnews API

//APi parameters
let newsContainer = document.getElementById("news__container");
let newsDropdown = document.getElementById('news__dropdown');

//API call

function newsfetch(q){

const url1 = `https://gnews.io/api/v4/search?q=${q}&max=5&country=us&lang=en&token=870061f7bf29680986c7953224cb9bd3`
console.log(url1);

fetch(url1)
  .then(response => response.json())
  .then(data => {
    data.articles.map(i => {
      
      let newsArticle = document.createElement("div");
      newsArticle.classList.add('news__article');
      
      newsArticle.innerHTML =
        `<h3 class="article__title">${i.title}</h3>
            <img class="article__img" 
             alt="Article Image"	src=${i.image}></img>
            <p class="article__body">${i.description}</p>
            <a href=${i.url} target="blank" class="button">Read More</a>
            `;

      newsContainer.appendChild(newsArticle);

    })
  })

  .catch(error => console.log("Error:", error))

  
}

//fetch onload
window.onload(newsfetch('coronavirus savannah'))


//Dropdown onchange
newsDropdown.addEventListener('change', (e)=>{
  
  newsContainer.innerHTML = " ";
  q = e.target.value;
  newsfetch(q);
  })
  