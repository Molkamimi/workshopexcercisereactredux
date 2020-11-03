export const increment = (payload) => {
  return {
    type: "Increment",
    payload,
  };
};
export const decrement = (payload) => {
  return {
    type: "Decrement",
    payload,
  };
};
