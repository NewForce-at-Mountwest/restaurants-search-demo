// --- PRINTS ALL RESTAURANTS ON PAGE LOAD ---//
// Fetch the data from the API
// Parse the data into JS
// Log the data to the console
fetch("http://localhost:8088/restaurants")
  .then((dirtyMoney) => dirtyMoney.json())
  .then((parsedRestaurants) => {
    console.log(parsedRestaurants);
    // Loop through the parsed restaurants
    // Select the container where I want to print them
    // Build an HTML string for each restaurant
    // Insert the restaurant HTML string to the container
    parsedRestaurants.forEach((restaurantObject) => {
      const htmlString = `<div class="restaurant-card">
        <a href="${restaurantObject.restaurant.url}" target="_blank">
            <h3>${restaurantObject.restaurant.name}</h3>
        </a>
        <p>Address: ${restaurantObject.restaurant.location.address}</p>
        <p>
            Average User Rating: ${restaurantObject.restaurant.user_rating.aggregate_rating}
        </p>
        <p>
            Average Cost For Two: $${restaurantObject.restaurant.average_cost_for_two}
        </p>
        <a href="${restaurantObject.restaurant.menu_url}" target="_blank">
            <button>View Menu</button>
        </a>
      </div>`;
      document.querySelector("#restaurant-container").innerHTML += htmlString;
    });
  });

// Add a click event listener to the search button
document
  .querySelector("#restaurant-search-btn")
  .addEventListener("click", () => {
    // Grab what the user typed into the search bar
    const searchTerm = document.querySelector("#restaurant-search-input").value;
    document.querySelector("#restaurant-container").innerHTML = "";
    // Plug the search term into my fetch call
    // Parse what comes back from the fetch call
    // Print my data to the DOM from the API
    fetch(`http://localhost:8088/restaurants?q=${searchTerm}`)
      .then((dirtyMoney) => dirtyMoney.json())
      .then((parsedRestaurants) => {
        // Loop through the parsed restaurants
        // Select the container where I want to print them
        // Build an HTML string for each restaurant
        // Insert the restaurant HTML string to the container
        parsedRestaurants.forEach((restaurantObject) => {
          const htmlString = `<div class="restaurant-card">
                <a href="${restaurantObject.restaurant.url}" target="_blank">
                    <h3>${restaurantObject.restaurant.name}</h3>
                </a>
                <p>Address: ${restaurantObject.restaurant.location.address}</p>
                <p>
                    Average User Rating: ${restaurantObject.restaurant.user_rating.aggregate_rating}
                </p>
                <p>
                    Average Cost For Two: $${restaurantObject.restaurant.average_cost_for_two}
                </p>
                <a href="${restaurantObject.restaurant.menu_url}" target="_blank">
                    <button>View Menu</button>
                </a>
              </div>`;

          document.querySelector(
            "#restaurant-container"
          ).innerHTML += htmlString;
        });
      });
  });

document
  .querySelector("#restaurant-search-input")
  .addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      // Grab what the user typed into the search bar
      const searchTerm = document.querySelector("#restaurant-search-input")
        .value;
      document.querySelector("#restaurant-container").innerHTML = "";
      fetch(`http://localhost:8088/restaurants?q=${searchTerm}`)
        .then((dirtyMoney) => dirtyMoney.json())
        .then((parsedRestaurants) => {
          parsedRestaurants.forEach((restaurantObject) => {
            const htmlString = `<div class="restaurant-card">
                  <a href="${restaurantObject.restaurant.url}" target="_blank">
                      <h3>${restaurantObject.restaurant.name}</h3>
                  </a>
                  <p>Address: ${restaurantObject.restaurant.location.address}</p>
                  <p>
                      Average User Rating: ${restaurantObject.restaurant.user_rating.aggregate_rating}
                  </p>
                  <p>
                      Average Cost For Two: $${restaurantObject.restaurant.average_cost_for_two}
                  </p>
                  <a href="${restaurantObject.restaurant.menu_url}" target="_blank">
                      <button>View Menu</button>
                  </a>
                </div>`;

            document.querySelector(
              "#restaurant-container"
            ).innerHTML += htmlString;
          });
        });
     }
  });


