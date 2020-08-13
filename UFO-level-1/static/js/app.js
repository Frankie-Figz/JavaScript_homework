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