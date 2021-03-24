// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click", runEvent);
form.on("submit", runEvent);

// Establish a function to create the table 
function createTable(filteredData){
    
    // Select the table element
    var table = d3.select("#ufo-table");

    // Select the tbody element 
    var tbody = table.select("tbody");
    var trow;

    // Remove any children from the tablebody
    tablebody.html("");

    // Loop through each object and append the data to the table
    filteredData.forEach(function(dataObject){
        // Create new row for each object
        trow = tbody.append("tr");
        trow.append("td").text(dataObject.datetime);
        trow.append("td").text(dataObject.city);
        trow.append("td").text(dataObject.state);
        trow.append("td").text(dataObject.country);
        trow.append("td").text(dataObject.shape);
        trow.append("td").text(dataObject.durationMinutes);
        trow.append("td").text(dataObject.comments);

    });

};

// Event Handler Function
function runEvent(){

    // Prevent Page from Refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the input value (date) from the input element
    var inputData = inputElement.property("value");

    // Filter the data.js by the input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputData);

    // Call the createTable function with the 
    // filteredData as the parameter
    createTable(filteredData);
};