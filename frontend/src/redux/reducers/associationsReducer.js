const associationsState = {
  associationsInfos: [],
  associationsInfosById: []
};

const associationsReducer = (state = associationsState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "GET_ASSOCIATIONS":
      return {
        ...newState,
        associationsInfos: action.data
      };
    default:
      return newState;
  }
};

export default associationsReducer;
