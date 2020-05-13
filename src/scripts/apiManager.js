// Return a fetch call that searches for a specific term
const apiManager = {
  getAllRestaurantsFromAPI: () => {
    return fetch("http://localhost:8088/restaurants").then((dirtyMoney) =>
      dirtyMoney.json()
    );
  },
  searchRestaurantsFromAPI: (whatTheUserSearched) => {
    return fetch(
      `http://localhost:8088/restaurants?q=${whatTheUserSearched}`
    ).then((dirtyMoney) => dirtyMoney.json());
  },
  postRestaurant: (restaurantObjectToPost) => {
    return fetch("http://localhost:8088/restaurants", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurantObjectToPost),
    });
  },
  deleteRestaurant: (id) => {
    return fetch(`http://localhost:8088/restaurants/${id}`, {
      method: "DELETE",
    })
  }
};

export default apiManager;
