// from data.js
var tableData = data;

// YOUR CODE HERE!
//select tbody the location to add the table

var tbody = d3.select("tbody");

data.forEach((sighting) => {
    var row = tbody.append("tr").style("color", "white");
    Object.entries(sighting).forEach(([key, value]) => {
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
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
    console.log(inputValue)

    var filteredData = tableData.filter(row => row.datetime === inputValue);

    //this is where we need to clear the table
    
    d3.selectAll("tr").remove()

    var tbody = d3.select("tbody");
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr").style("color", "white");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}