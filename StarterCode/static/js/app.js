// from data.js

//view table in log
var tableData = data;
data.forEach(function(alienData) {
    console.log(alienData);
  });
// YOUR CODE HERE!
// Reference table
var tbody = d3.select("tbody");
var $tbody = document.querySelector("tbody");
var $datetime = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#filter-btn");
//Loop through table

//Filter
// data.forEach(function(alienData) {
//     console.log(alienData);
//     var row = tbody.append("td");
//     Object.entries(alienData).forEach(function([key, value]) {
//         console.log(key, value);
//       });
//     });
 var filteredAddresses = data;
 function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredAddresses.length; i++) {
      // Get the current address object and its fields
      var address = filteredAddresses[i];
      var fields = Object.keys(address);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell and set its inner text to be the current value at the current address's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = address[field];
      }
    }
   }
   
   function handleSearchButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterState = $stateInput.value.trim().toLowerCase();
    var filterCity = $cityInput.value.trim().toLowerCase();
   
    // Set filteredAddresses to an array of all addresses who's "state" matches the filter
    filteredAddresses = addressData.filter(function(address) {
      var addressState = address.state.substring(0, filterState.length).toLowerCase();
      var addressCity = address.city.substring(0, filterCity.length).toLowerCase();
      if (addressState === filterState && addressCity === filterCity) {
        return true;
      }
      return false;
    });
    renderTable();
   }
   
   // Render the table for the first time on page load
   renderTable();

