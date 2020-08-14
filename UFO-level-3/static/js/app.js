// from data.js
var tableData = data;

// YOUR CODE HERE!
//select tbody the location to add the table

var tbody = d3.select("tbody");

data.forEach((sighting) => {
    var row = tbody.append("tr").style("color", "white");
    Object.values(sighting).forEach((value) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

var form = d3.select("#datetime");

// create event handlers

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(){
    d3.event.preventDefault();
    var dateValue = d3.select("#datetime").property("value");
    var cityValue = d3.select("#city").property("value");
    var stateValue = d3.select("#state").property("value");
    var countryValue = d3.select("#country").property("value");
    var shapeValue = d3.select("#shape").property("value");

    console.log(dateValue);
    console.log(cityValue);
    console.log(stateValue);
    console.log(countryValue);
    console.log(shapeValue);

    var filteredData = tableData.filter(row => {
        if((row.datetime == dateValue || dateValue == "") &&
            (row.city == cityValue || cityValue == "") &&
            (row.state == stateValue || stateValue == "") &&
            (row.country == countryValue || countryValue == "") &&
            (row.shape == shapeValue || shapeValue == "")) {
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