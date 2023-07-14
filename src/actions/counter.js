export const incNumber = () => {
  return {
    type: "INCREMENT",
    payload: 2
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
    payload: 1
  };
};