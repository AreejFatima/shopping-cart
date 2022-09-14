export const fetchProducts = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  return response.json();
};

export const fetchUsers = async () => {
  const response = await fetch(`https://fakestoreapi.com/users`);
  return response.json();
};
