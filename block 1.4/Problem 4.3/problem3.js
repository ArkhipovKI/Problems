const calculatePrice = (orders) => {
  if (!orders || !Array.isArray(orders)) {
    return 0;
  }
  return orders.reduce((acc, order) => acc + order.price, 0);
};
export { calculatePrice };
