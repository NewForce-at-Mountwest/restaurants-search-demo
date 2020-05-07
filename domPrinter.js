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

  const printAllRestaurants = (restaurantArray) => {
    restaurantArray.forEach((restaurantObjectInLoop) => {
      const htmlString = buildRestaurantCard(restaurantObjectInLoop);
      document.querySelector("#restaurant-container").innerHTML += htmlString;
    });
  };