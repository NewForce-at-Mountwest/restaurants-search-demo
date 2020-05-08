import apiManagerObject from "./apiManager.js";
import printAllRestaurants from "./domPrinter.js";
import searchEvent from "./eventListeners.js";

// Print all of the restaurants
apiManagerObject.getAllRestaurantsFromAPI().then((parsedRestaurants) => {
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

//  Add event listener on submit button for restaurant form
document
  .querySelector("#add-restaurant")
  .addEventListener("click", function () {
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

    console.log(
      restaurantName,
      restaurantMenuURL,
      restaurantURL,
      restaurantRating,
      restaurantCostPerTwo,
      restaurantAddress
    );

    const restaurantObject = {
      url: restaurantURL,
      menuURL: restaurantMenuURL,
      name: restaurantName,
      averageUserRating: restaurantRating,
      averageCostPerTwo: restaurantCostPerTwo,
      address: restaurantAddress,
    };

    fetch("http://localhost:8088/restaurants", {
      // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurantObject),
    }).then(function(){
      document.querySelector("#restaurant-container").innerHTML = ""
      apiManagerObject.getAllRestaurantsFromAPI()
        .then((parsedRestaurants) => {
          printAllRestaurants(parsedRestaurants);
        });
    })


    // .then(() => {
    //   // Print all of the restaurants
    //
    // });

    console.log(restaurantObject);
  });
