const ambassadorsState = {
  ambassadorsInfos: [],
  ambassadorsInfosById: []
};

const ambassadorsReducer = (state = ambassadorsState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "GET_AMBASSADORS":
      return {
        ...newState,
        ambassadorsInfos: action.data
      };
    default:
      return newState;
  }
};

export default ambassadorsReducer;
