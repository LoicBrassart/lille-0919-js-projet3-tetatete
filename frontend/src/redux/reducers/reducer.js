const initialState = {
  filter: null
};

function reducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case "SANTE":
      return { filter: 1 };
    case "HUMANITAIRE":
      return { filter: 2 };
    case "CULTURE":
      return { filter: 3 };
    case "SPORT":
      return { filter: 4 };
    case "ECOLOGIE":
      return { filter: 5 };
    case "EDUCATION":
      return { filter: 6 };
    case "ALL":
      return { filter: null };
    default:
      return newState;
  }
}
export default reducer;
