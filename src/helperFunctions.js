export const generateInitialState = (size) => {
  let initialState = {};
  for (let i = 1; i <= size; i++) {
    initialState[i] = "white";
  }
  return initialState;
};
