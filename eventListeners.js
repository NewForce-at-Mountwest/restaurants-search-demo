const searchEvent = () => {
    const searchTerm = document.querySelector("#restaurant-search-input").value;

    document.querySelector("#restaurant-container").innerHTML = "";

    searchRestaurantsFromAPI(searchTerm).then((parsedRestaurants) => {
      printAllRestaurants(parsedRestaurants);
    });
  };