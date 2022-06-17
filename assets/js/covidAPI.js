//Variables
var localCases = document.getElementById("localCases");
var localDeaths = document.getElementById("localDeaths");
var localPop = document.getElementById("localPop");
var localCaption = document.getElementById("local__caption");
var localVax = document.getElementById("localVax");

var stateCases = document.getElementById("stateCases");
var stateDeaths = document.getElementById("stateDeaths");
var statePop = document.getElementById("statePop");
var stateCaption = document.getElementById("state__caption");
var stateVax = document.getElementById("stateVax");

var natCases = document.getElementById("natCases");
var natDeaths = document.getElementById("natDeaths");
var natPop = document.getElementById("natPop");
var natCaption = document.getElementById("nat__caption");
var natVax = document.getElementById("natVax");

//local stats api variables
var API_key = "bef296005bd846e784d632e6d304a610";
var cbsa_code = "42340";
var state = "GA";

var localUrl = `https://api.covidactnow.org/v2/cbsa/${cbsa_code}.json?apiKey=${API_key}`;
var stateUrl = `https://api.covidactnow.org/v2/state/${state}.json?apiKey=${API_key}`;
var natUrl = `https://api.covidactnow.org/v2/country/US.json?apiKey=${API_key}`;
//Get method for local data
fetch(localUrl, {
  method: "GET",
})
  .then((response) => response.json())

  .then((json) => {
    localPop.innerHTML = `Total Population: ${json.population}`;

    localCases.innerHTML = `<h3>Cases</h3>
                        <div>Total:&nbsp<span class="num">${json.actuals.cases}</span></div>
                        <div>New:&nbsp<span class="num">${json.actuals.newCases}</span></div>`;

    localDeaths.innerHTML = `<h3>Deaths</h3>
                        <div>Total:&nbsp<span class="num">${json.actuals.deaths}</span></div>
                        <div>New:&nbsp<span class="num">${json.actuals.newDeaths}</span></div>`;

    localVax.innerHTML = `<h3>Vaccinations</h3>
                        <div>Initiated:&nbsp<span class="num">${json.actuals.vaccinationsInitiated}</span></div>
                        <div>Completed:&nbsp<span class="num">${json.actuals.vaccinationsCompleted}</span></div>
                        <div>Administered:&nbsp<span class="num">${json.actuals.vaccinesAdministered}</span></div>`;

    localCaption.innerText = `Updated: ${json.lastUpdatedDate}`;
  })
  .catch((error) => console.log("Error:", error));

//Get method for state data
fetch(stateUrl, {
  method: "GET",
})
  .then((response) => response.json())

  .then((json) => {
    statePop.innerHTML = `Total Population: ${json.population}`;

    stateCases.innerHTML = `<h3>Cases</h3>
                        <div>Total:&nbsp<span class="num">${json.actuals.cases}</span></div>
                        <div>New:&nbsp<span class="num">${json.actuals.newCases}</span></div>`;

    stateDeaths.innerHTML = `<h3>Deaths</h3>
                        <div>Total:&nbsp<span class="num">${json.actuals.deaths}</span></div>
                        <div>New:&nbsp<span class="num">${json.actuals.newDeaths}</span></div>`;

    stateVax.innerHTML = `<h3>Vaccinations</h3>
                        <div>Initiated:&nbsp<span class="num">${json.actuals.vaccinationsInitiated}</span></div>
                        <div>Completed:&nbsp<span class="num">${json.actuals.vaccinationsCompleted}</span></div>
                        <div>Administered:&nbsp<span class="num">${json.actuals.vaccinesAdministered}</span></div>`;

    localCaption.innerText = `Updated: ${json.lastUpdatedDate}`;
  })
  .catch((error) => console.log("Error:", error));

//Get method for state data
fetch(natUrl, {
  method: "GET",
})
  .then((response) => response.json())

  .then((json) => {
    natPop.innerHTML = `Total Population: ${json.population}`;

    natCases.innerHTML = `<h3>Cases</h3>
                        <div>Total:&nbsp<span class="num">${json.actuals.cases}</span></div>
                        <div>New:&nbsp<span class="num">${json.actuals.newCases}</span></div>`;

    natDeaths.innerHTML = `<h3>Deaths</h3>
                        <div>Total:&nbsp<span class="num">${json.actuals.deaths}</span></div>
                        <div>New:&nbsp<span class="num">${json.actuals.newDeaths}</span></div>`;

    natVax.innerHTML = `<h3>Vaccinations</h3>
                        <div>Initiated:&nbsp<span class="num">${json.actuals.vaccinationsInitiated}</span></div>
                        <div>Completed:&nbsp<span class="num">${json.actuals.vaccinationsCompleted}</span></div>
                        <div>Administered:&nbsp<span class="num">${json.actuals.vaccinesAdministered}</span></div>`;

    localCaption.innerText = `Updated: ${json.lastUpdatedDate}`;
  })
  .catch((error) => console.log("Error:", error));