//Variables
var totalCases = document.getElementById("totalCases")
var newCases = document.getElementById("newCases")
var totalDeaths = document.getElementById("totalDeaths")
var newDeaths = document.getElementById("newDeaths")
var population = document.getElementById("population")
//Get Method from CovidActNow
var API_key = "bef296005bd846e784d632e6d304a610"
var cbsa_code = "42340"
var url = `https://api.covidactnow.org/v2/cbsa/${cbsa_code}.json?apiKey=${API_key}`
console.log(url)

fetch(url, {
	method: 'GET'
})

.then(response => response.json())

.then(json=>{

	console.log(json.population);
  population.innerText = "Total Population: " + json.population;

	console.log(json.actuals.cases);
  //Total and New Cases in Savannah Metro
  totalCases.innerText ="Total: " + json.actuals.cases;
  newCases.innerText = "New: " + json.actuals.newCases; 
  
  //Total and New Death in Savannah Metro
  console.log(json.actuals.deaths)
  totalDeaths.innerText = "Total: " + json.actuals.deaths;
  newDeaths.innerText = "New: " + json.actuals.newDeaths;
})

