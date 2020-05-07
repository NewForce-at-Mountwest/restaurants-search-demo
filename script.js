// Print all of the restaurants
getAllRestaurantsFromAPI()
  .then((parsedRestaurants) => {
    printAllRestaurants(parsedRestaurants);
  });

// Add a click event listener to the search button
document
  .querySelector("#restaurant-search-btn")
  .addEventListener("click", searchEvent);

  // Add a keypress event to the search input to check for an enter key
document
  .querySelector("#restaurant-search-input")
  .addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      searchEvent();
    }
  });
