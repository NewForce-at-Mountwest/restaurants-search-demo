// Return a fetch call that searches for a specific term
  const apiManager = {
    getAllRestaurantsFromAPI: () => {
        return fetch("http://localhost:8088/restaurants")
        .then((dirtyMoney) => dirtyMoney.json())
      },
      searchRestaurantsFromAPI: (whatTheUserSearched) => {
        return fetch(
          `http://localhost:8088/restaurants?q=${whatTheUserSearched}`
        ).then((dirtyMoney) => dirtyMoney.json());
      },
      postRestaurant: (restaurantToPost) => {
        return fetch("http://localhost:8088/restaurants", {
          // Replace "url" with your API's URL
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(restaurantToPost),
        })
      }
  }

  export default apiManager;
