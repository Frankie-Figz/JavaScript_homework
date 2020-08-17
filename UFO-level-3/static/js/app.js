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

var uniqueCity = Array.from(new Set(cityList));
var uniqueState = Array.from(new Set(stateList));
console.log(uniqueCity);
console.log(uniqueState);
// YOUR CODE HERE!
//select tbody the location to add the table

var tbody = d3.select("tbody");

var selectCity = d3.select("#city").node();

var cityValue = selectCity.value
console.log("here");
console.log(selectCity);
console.log("here1");
console.log(d3.select("#city").selectAll("option"))
updateCityList(uniqueCity);

function updateCityList(uniqueCity){
    //d3.event.preventDefault();
    console.log(d3.select("#city"))
    d3.select("#city").selectAll("option").remove()
    uniqueCity.forEach(function(city){
        var row = d3.select("#city");
        row.append("option").text(city);
        var test = row.select("option")
        console.log(test)
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
    d3.event.preventDefault();
    var dateValue = d3.select("#datetime").property("value");
    var cityValue = String(d3.select("#city").node().value).toLowerCase();
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
        if((row.datetime == dateValue || dateValue == "") &
            (row.city == cityValue || cityValue == "")) {
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