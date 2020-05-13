import apiManagerObject from "./apiManager.js";
import printAllRestaurants from "./domPrinter.js";
import eventListenerObject from "./eventListeners.js";

// Print all of the restaurants
apiManagerObject.getAllRestaurantsFromAPI().then((parsedRestaurants) => {
  printAllRestaurants(parsedRestaurants);
});

// Add a click event listener to the search button
document
  .querySelector("#restaurant-search-btn")
  .addEventListener("click", eventListenerObject.searchEvent);

// Add a keypress event to the search input to check for an enter key
document
  .querySelector("#restaurant-search-input")
  .addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      eventListenerObject.searchEvent();
    }
  });

//  Add event listener on submit button for restaurant form
document
  .querySelector("#add-restaurant")
  .addEventListener("click", eventListenerObject.saveRestaurantEvent);

// Add delete buttons to restaurant card
// Add event listener to delete buttons
document.querySelector("body").addEventListener("click", () => {
  if (event.target.id.includes("delete-btn")) {
    eventListenerObject.deleteRestaurantEvent()
  } else if (event.target.id.includes("edit-btn")){
    eventListenerObject.printEditForm()
  }
});
