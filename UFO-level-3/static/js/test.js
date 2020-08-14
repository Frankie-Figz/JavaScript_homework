var dropDown = d3.selectAll("dropdown");

var dropDownMenu = d3.selectAll("dropdown-Menu");
var dropDownItem = d3.selectAll("dropdown-item");
console.log(dropDown)
console.log(dropDownMenu)
console.log(dropDownItem)
dropDown.on("show.bs.dropdown", runEnter)
dropDownMenu.on("show.bs.dropdown", runEnter);
dropDownItem.on("show.bs.dropdown", runEnter);
function runEnter(){
    d3.event.preventDefault();
    console.log("hello")
    console.log(this)
    d3.event.preventDefault();
    var selectedItem = d3.select(this);

    console.log(selectedItem);
}