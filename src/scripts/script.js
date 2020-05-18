import apiManagerObject from "./apiManager.js";
import printAllRestaurants from "./domPrinter.js";
import eventListenerObject from "./eventListeners.js";

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
    eventListenerObject.deleteRestaurantEvent();
  } else if (event.target.id.includes("edit-btn")) {
    eventListenerObject.printEditForm();
  } else if (event.target.id.includes("save-changes")) {
    eventListenerObject.saveRestaurantChangesEvent();
  }
});

document.querySelector("#login-btn").addEventListener("click", () => {
  console.log("Ya clicked the login button");
  const usernameValue = document.querySelector("#username-input").value;
  const passwordValue = document.querySelector("#password-input").value;
  console.log(usernameValue, passwordValue);
  fetch(`http://localhost:8088/users?username=${usernameValue}`)
    .then((r) => r.json())
    .then((user) => {
      console.log(user[0].id);
      // TODO: check and make sure they entered the right password
      // TODO: handle errors if user enters username that doesn't exist
      // TODO: think about how to register new users
      sessionStorage.setItem("userId", user[0].id);
      // Print all of the restaurants
      apiManagerObject.getAllRestaurantsFromAPI().then((parsedRestaurants) => {
        printAllRestaurants(parsedRestaurants);
      });
    });
});
