// Builds and returns HTML string for a restaurant card
const buildRestaurantCard = (singleRestaurant) => {
    return `<div class="restaurant-card">
      <a href="${singleRestaurant.restaurant.url}" target="_blank">
          <h3>${singleRestaurant.restaurant.name}</h3>
      </a>
      <p>Address: ${singleRestaurant.restaurant.location.address}</p>
      <p>
          Average User Rating: ${singleRestaurant.restaurant.user_rating.aggregate_rating}
      </p>
      <p>
          Average Cost For Two: $${singleRestaurant.restaurant.average_cost_for_two}
      </p>
      <a href="${singleRestaurant.restaurant.menu_url}" target="_blank">
          <button>View Menu</button>
      </a>
    </div>`;
  };

// Return a fetch call that searches for a specific term
const searchRestaurantsFromAPI = (whatTheUserSearched) => {
    return fetch(`http://localhost:8088/restaurants?q=${whatTheUserSearched}`)
    .then((dirtyMoney) => dirtyMoney.json())
}

const printAllRestaurants = (restaurantArray) => {
    restaurantArray.forEach((restaurantObjectInLoop) => {
        const htmlString = buildRestaurantCard(restaurantObjectInLoop);
        document.querySelector("#restaurant-container").innerHTML += htmlString;
      });
}

const searchEvent = () => {
    const searchTerm = document.querySelector("#restaurant-search-input").value;

    document.querySelector("#restaurant-container").innerHTML = "";

    searchRestaurantsFromAPI(searchTerm)
      .then((parsedRestaurants) => {
        printAllRestaurants(parsedRestaurants)
      });

}




fetch("http://localhost:8088/restaurants")
  .then((dirtyMoney) => dirtyMoney.json())
  .then((parsedRestaurants) => {
    console.log(parsedRestaurants);
    printAllRestaurants(parsedRestaurants)
  });

// Add a click event listener to the search button
document
  .querySelector("#restaurant-search-btn")
  .addEventListener("click", searchEvent);

document
  .querySelector("#restaurant-search-input")
  .addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        searchEvent()
    }
  });
