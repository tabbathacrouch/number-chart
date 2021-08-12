export const generateInitialState = (size) => {
  let initialState = {};
  for (let i = 1; i <= size; i++) {
    initialState[i] = "white";
  }
  return initialState;
};

export const generateUpdatedMultiplesState = (
  multiple,
  size,
  updatedState = {}
) => {
  switch (multiple) {
    case "2":
      for (let i = 0; i <= size; i += 2) {
        updatedState[i] = "yellow";
      }
      break;
    case "5":
      for (let i = 0; i <= size; i += 5) {
        updatedState[i] = "yellow";
      }
      break;
    case "10":
      for (let i = 0; i <= size; i += 10) {
        updatedState[i] = "yellow";
      }
      break;
    default:
  }
  return updatedState;
};
