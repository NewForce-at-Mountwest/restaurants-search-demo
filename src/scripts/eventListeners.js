import apiManagerObject from "./apiManager.js";
import printAllRestaurants from "./domPrinter.js";
import apiManager from "./apiManager.js";

const eventListeners = {
  searchEvent: () => {
    const searchTerm = document.querySelector("#restaurant-search-input").value;

    document.querySelector("#restaurant-container").innerHTML = "";

    apiManagerObject
      .searchRestaurantsFromAPI(searchTerm)
      .then((parsedRestaurants) => {
        printAllRestaurants(parsedRestaurants);
      });
  },
  saveRestaurantEvent: () => {
    // When the button is clicked, log all the values that user typed in to the console
    const restaurantName = document.querySelector("#restaurant-name").value;
    const restaurantMenuURL = document.querySelector("#restaurant-menu-url")
      .value;
    const restaurantURL = document.querySelector("#restaurant-url").value;
    const restaurantRating = document.querySelector("#restaurant-rating").value;
    const restaurantCostPerTwo = document.querySelector("#restaurant-cost")
      .value;
    const restaurantAddress = document.querySelector("#restaurant-address")
      .value;

    const restaurantObject = {
      url: restaurantURL,
      menuURL: restaurantMenuURL,
      name: restaurantName,
      averageUserRating: restaurantRating,
      averageCostPerTwo: restaurantCostPerTwo,
      address: restaurantAddress,
    };
    apiManager.postRestaurant(restaurantObject)
    .then(apiManager.getAllRestaurantsFromAPI)
    .then((parsedRestaurants) => {
      printAllRestaurants(parsedRestaurants)
    })
    // .then(function () {
    //   apiManagerObject.getAllRestaurantsFromAPI()
    //   .then((parsedRestaurants) => {
    //     printAllRestaurants(parsedRestaurants);
    //   });
    // });
  },
  deleteRestaurantEvent: () => {
    // On click, get the id of the thing they clicked on
    console.log("This is event.target.id", event.target.id);
    console.log(event.target.id.split("-")[2]);
    const primaryKey = event.target.id.split("-")[2];
    
    // Use id to make a fetch call w/ a DELETE method to the database
   apiManager.deleteRestaurant(primaryKey)
   .then(apiManager.getAllRestaurantsFromAPI)
   .then(parsedRestaurants => {
     printAllRestaurants(parsedRestaurants)
   })

  },
};

export default eventListeners;
