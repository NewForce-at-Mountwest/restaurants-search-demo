import apiManagerObject from "./apiManager.js";
import printAllRestaurants from "./domPrinter.js";
import eventListeners from "./eventListeners.js";

// Print all of the restaurants
apiManagerObject.getAllRestaurantsFromAPI().then((parsedRestaurants) => {
  printAllRestaurants(parsedRestaurants);
});

// Add a click event listener to the search button
document
  .querySelector("#restaurant-search-btn")
  .addEventListener("click", eventListeners.searchEvent);

// Add a keypress event to the search input to check for an enter key
document
  .querySelector("#restaurant-search-input")
  .addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      eventListeners.searchEvent();
    }
  });

//  Add event listener on submit button for restaurant form
document
  .querySelector("#add-restaurant")
  .addEventListener("click", eventListeners.saveRestaurantEvent);


// Add delete buttons to restaurant card
// Add event listener to delete buttons
document.querySelector("body").addEventListener("click", () => {
  if (event.target.id.includes("delete-btn")) {
    eventListeners.deleteRestaurantEvent(event);
  }
});

