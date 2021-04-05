//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

var tbody = d3.select("tbody");

//Create the table
data.forEach((sighting) => {
    //Create a variable which adds a new row
    var row = tbody.append("tr");
    // Use `Object.entries` and `forEach` to iterate through keys and values
    Object.entries(sighting).forEach(([key, value]) => {
        //Create a variable which adds a new data cell (column) and writes the value as text
        var td = row.append("td");
        td.text(value);
    });
});

//Create a variable which selects the button
var button = d3.select("#filter-btn");

//Create the event handler
button.on("click", runEnter);

// Function for form event handler
function runEnter() {

    //Create variable which selects input element
    var inputDT = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    //console.log(inputCityVal);

    //Create variable which looks at each object and filters it
    var dataFiltered = data.filter(sighting =>
        sighting.datetime === inputDT &&
        sighting.city === inputCity &&
        sighting.state === inputState &&
        sighting.country === inputCountry &&
        sighting.shape === inputShape
    );

    //console.log(dataFiltered);

    //Clears the table of the original data
    tbody.html("");

    //Show the filtered table
    dataFiltered.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.values(sighting).forEach((value) => {
            row.append("td").text(value);
        });
    });

};