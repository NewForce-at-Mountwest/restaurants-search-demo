// Return a fetch call that searches for a specific term
const searchRestaurantsFromAPI = (whatTheUserSearched) => {
    return fetch(
      `http://localhost:8088/restaurants?q=${whatTheUserSearched}`
    ).then((dirtyMoney) => dirtyMoney.json());
  };

  const getAllRestaurantsFromAPI = () => {
    return fetch("http://localhost:8088/restaurants")
    .then((dirtyMoney) => dirtyMoney.json())
  }