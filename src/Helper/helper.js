export const setItemsToLocalStorage = (data) => {
  localStorage.setItem("cartItems", JSON.stringify(data));
};

export const getItemsFromLocalStorage = () => {
  const fetchedData = localStorage.getItem("cartItems");
  return fetchedData;
};
