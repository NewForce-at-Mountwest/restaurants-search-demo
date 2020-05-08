import apiManagerObject from "./apiManager.js";
import printAllRestaurants from "./domPrinter.js";


// This is called a "factory function". It builds and returns an object. We don't need to export it, because we only need access to it in this file.
const buildRestaurantObjectFromForm = () => {
    return {
       url: document.querySelector("#restaurant-url").value,
       menuURL: document.querySelector("#restaurant-menu-url")
       .value,
       name: document.querySelector("#restaurant-name").value,
       averageUserRating: document.querySelector("#restaurant-rating").value,
       averageCostPerTwo: document.querySelector("#restaurant-cost").value,
       address: document.querySelector("#restaurant-address").value,
     };
}

const eventListeners = {
  searchEvent: () => {
    const searchTerm = document.querySelector("#restaurant-search-input").value;
    apiManagerObject
      .searchRestaurantsFromAPI(searchTerm)
      .then((parsedRestaurants) => {
        printAllRestaurants(parsedRestaurants);
      });
  },
  saveRestaurantEvent: () => {
    const restaurantObject = buildRestaurantObjectFromForm();
    apiManagerObject.postRestaurant(restaurantObject) // Post the restaurant to json-server
    .then(apiManagerObject.getAllRestaurantsFromAPI) // Fetch all the restaurants again
    .then(printAllRestaurants) // Once the restaurants come back, print them to the DOM
  }

}


export default eventListeners;
