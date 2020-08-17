// from data.js
var tableData = data;
console.log(tableData);
console.log(tableData[0].city);
var cityList = tableData.map(function(row){
    return row.city
})

var stateList = tableData.map(function(row){
    return row.state
})

var countryList = tableData.map(function(row){
    return row.country
})


var shapeList = tableData.map(function(row){
    return row.shape
})


var uniqueCity = Array.from(new Set(cityList));
var uniqueState = Array.from(new Set(stateList));
var uniqueCountry = Array.from(new Set(countryList));
var uniqueShape = Array.from(new Set(shapeList));
console.log(uniqueCity);
console.log(uniqueState);
console.log(uniqueCountry);
console.log(uniqueShape);
// YOUR CODE HERE!
//select tbody the location to add the table

var tbody = d3.select("tbody");

var selectCity = d3.select("#city");

console.log("here");
console.log(selectCity);
console.log("here1");
console.log(d3.select("#city").selectAll("option"))
updateCityList(uniqueCity);
updateStateList(uniqueState);
updateCountryList(uniqueCountry);
updateShapeList(uniqueShape);

function updateCityList(uniqueCity){
    //d3.event.preventDefault();
    console.log(d3.select("#city"))
    d3.select("#city").selectAll("option").remove()
    d3.select('#city').append("option").text("empty");
    uniqueCity.forEach(function(city){
        var row = d3.select("#city");
        row.append("option").text(city);
    })
}

function updateStateList(uniqueState){
    //d3.event.preventDefault();
    console.log(d3.select("#state"))
    d3.select("#state").selectAll("option").remove()
    d3.select('#state').append("option").text("empty");
    uniqueState.forEach(function(state){
        var row = d3.select("#state");
        row.append("option").text(state);
    })
}

function updateCountryList(uniqueCountry){
    //d3.event.preventDefault();
    console.log(d3.select("#country"))
    d3.select("#country").selectAll("option").remove()
    d3.select('#country').append("option").text("empty");
    uniqueCountry.forEach(function(country){
        var row = d3.select("#country");
        row.append("option").text(country);
    })
}


function updateShapeList(uniqueShape){
    //d3.event.preventDefault();
    console.log(d3.select("#shape"))
    d3.select("#shape").selectAll("option").remove()
    d3.select('#shape').append("option").text("empty");
    uniqueShape.forEach(function(shape){
        var row = d3.select("#shape");
        row.append("option").text(shape);
    })
}



var button = d3.select("#filter-btn");

var form = d3.select("#datetime");

var cityFilter = d3.select('#city')

// create event handlers

button.on("click", runEnter);
form.on("submit", runEnter);
cityFilter.on("change",runEnter )

function runEnter(){
    //d3.event.preventDefault();
    var dateValue = d3.select("#datetime").property("value");
    var cityValue = String(d3.select("#city").node().value).toLowerCase();
    var stateValue = String(d3.select("#state").node().value).toLowerCase();
    var countryValue = String(d3.select("#country").node().value).toLowerCase();
    var shapeValue = String(d3.select("#shape").node().value).toLowerCase();
    // var stateValue = d3.select("#state").property("value");
    // var countryValue = d3.select("#country").property("value");
    // var shapeValue = d3.select("#shape").property("value");

    console.log(dateValue);
    console.log(cityValue);
    // console.log(stateValue);
    // console.log(countryValue);
    // console.log(shapeValue);

    // var filteredData = tableData.filter(row => {
    //     if((row.datetime == dateValue || dateValue == "") &&
    //         (row.city == cityValue || cityValue == "") &&
    //         (row.state == stateValue || stateValue == "") &&
    //         (row.country == countryValue || countryValue == "") &&
    //         (row.shape == shapeValue || shapeValue == "")) {
    //         return true}
    // });

    var filteredData = tableData.filter(row => {
        if((row.datetime == dateValue || dateValue == "") &&
            (row.city == cityValue || cityValue == "empty") &&
            (row.state == stateValue || stateValue == "empty") &&
            (row.country == countryValue || countryValue == "empty") &&
            (row.shape == shapeValue || shapeValue == "empty")) {
            return true}
    });

    //this is where we need to clear the table
    
    d3.select("tbody").selectAll("tr").remove()

    var tbody = d3.select("tbody");

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr").style("color", "white");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}