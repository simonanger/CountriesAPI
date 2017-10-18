var url = "https://restcountries.eu/rest/v2/all"

var option = {};

var addCountriesToList = function( countries ) {
  var select = document.getElementById("list");
  countries.forEach( function(country) {
    option = document.createElement("option")
    option.innerText = country.name
    select.appendChild(option)
  })
}

var makeRequest = function( url ) {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.addEventListener( "load", function() {
    var countries = JSON.parse( this.responseText );
    addCountriesToList( countries )
  })
  request.send()
}

var dropDown = document.querySelector("select");
dropDown.addEventListener("change", handleSelectChange);

var handleSelectChange = function(countries) {

  var dropDown = document.querySelector("select");
  var name = document.getElementById("name");
  var pop = document.getElementById("pop");
  var capital = document.getElementById("capital");
  name.innerText = this.value;
  pop.innerText = country.population;
  capital.innerText = country.capital;
}


var buttonClear = document.getElementById("clear");
buttonClear.addEventListener("click", function() {
  var ul = document.getElementById("countries");
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
  // ul.innerHTML = "";
});

makeRequest( url );
