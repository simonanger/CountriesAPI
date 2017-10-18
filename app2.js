var url = "https://restcountries.eu/rest/v2/all"

var updateCountryDetails = function(country) {
  var name = document.getElementById("name");
  var pop = document.getElementById("pop");
  var capital = document.getElementById("capital");
  name.innerText = "Name: " + country.name;
  pop.innerText = "Population: " + country.population;
  capital.innerText = "Capital: " + country.capital;
}

var request = new XMLHttpRequest();
var choice = [];
request.open("GET", url);

request.addEventListener("load", function() {
  countries = JSON.parse(this.responseText);
  for (var country of countries) {
    var select = document.getElementById("list");
    var option = document.createElement('option');
    option.innerText = country.name;
    select.appendChild(option);
  }



  // setDefinitionText("#name", savedCountry.name);



});

var handleSelectChange = function(event) {
  var country = countries[event.target.selectedIndex];
  var dropDown = document.querySelector("select");


  // setDefinitionText("#name", country.name);
  // setDefinitionText("#pop", country.population);
  // setDefinitionText("#capital", country.capital);

  var jsonString = JSON.stringify(country);
  localStorage.setItem("country", jsonString);
  updateCountryDetails(country);
}

var dropDown = document.querySelector("select");
dropDown.addEventListener("change", handleSelectChange);



request.send();


window.addEventListener("load", function() {
  var jsonString = localStorage.getItem("country");
  var country = JSON.parse(jsonString);
  updateCountryDetails(country);
})
