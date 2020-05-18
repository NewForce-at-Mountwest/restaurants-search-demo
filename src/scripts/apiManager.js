// Return a fetch call that searches for a specific term
const apiManager = {
  getAllRestaurantsFromAPI: () => {
    return fetch(`http://localhost:8088/restaurants?userId=${sessionStorage.getItem("userId")}`).then((dirtyMoney) =>
      dirtyMoney.json()
    );
  },
  searchRestaurantsFromAPI: (whatTheUserSearched) => {
    return fetch(
      `http://localhost:8088/restaurants?q=${whatTheUserSearched}&userId=${sessionStorage.getItem("userId")}`
    ).then((dirtyMoney) => dirtyMoney.json());
  },
  postRestaurant: (restaurantObjectToPost) => {
    restaurantObjectToPost.userId = sessionStorage.getItem("userId")
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
  },
  getOneRestaurant: (id) => {
    return fetch(`http://localhost:8088/restaurants/${id}`).then(r => r.json())
  },
  updateRestaurant: (restaurantObject) => {
    restaurantObject.userId = sessionStorage.getItem("userId")
    return fetch(`http://localhost:8088/restaurants/${restaurantObject.id}`,{
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(restaurantObject)
  })
  }
};

export default apiManager;
