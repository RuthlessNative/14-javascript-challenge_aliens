// from data.js
var tableData = data;

//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

var tbody = d3.select("tbody");

//Create the table
data.forEach((sighting) => {
    //Create a variable which adds a new row
    var row = tbody.append("tr");
    // Use `Object.entries` and `forEach` to iterate through keys and values
    Object.entries(sighting).forEach(([key, value]) => {
        //Create a variable which adds a new data cell
        var td = row.append("td");
        td.text(value);
    });
});

//Create a variable which selects the button
var button = d3.select("#filter-btn");

//Create a variable which selects the form
//var form = d3.select(".form-control");

//Create the event handler
button.on("click", runEnter);

// Function for form event handler
function runEnter() {
    //Prevent page refresh
    //d3.event.preventDefault();

    //Create variable which selects input element
    var inputElement = d3.select("#datetime");

    //Create variable which selects value of input element
    var inputVal = inputElement.property("value");

    console.log(inputVal);

    //Create variable which looks at each object and filters it
    var dataFiltered = data.filter(function(sighting){
        return sighting.datetime === inputVal})
    // var dataFiltered = data.filter(sighting => sighting.datetime === inputVal);

    //console.log(dataFiltered);

    //Clears the table of the original data
    tbody.html("");

    //Show the filtered table
    dataFiltered.forEach((sighting) => {
        var row = tbody.append("tr");
        //Alternativly, you can pull out the entire entry and [key,value] pair
        //Object.entries(sighting).forEach(([key, value]) => {
        Object.values(sighting).forEach((value) => {
            var td = row.append("td");
            td.text(value);
            //Alternatively...
            //row.append("td").text(value);
        });
    });

};