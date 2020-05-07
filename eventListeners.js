import apiManagerObject from "./apiManager.js"
import printAllRestaurants from "./domPrinter.js"

const searchEvent = () => {
    const searchTerm = document.querySelector("#restaurant-search-input").value;

    document.querySelector("#restaurant-container").innerHTML = "";

    apiManagerObject.searchRestaurantsFromAPI(searchTerm).then((parsedRestaurants) => {
      printAllRestaurants(parsedRestaurants);
    });
  };

  export default searchEvent;