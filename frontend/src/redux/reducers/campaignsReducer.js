const initialState = {
  campaignsInfos: [],
  campaignInfosById: []
};

const campaignsReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "GET_CAMPAIGNS":
      return {
        ...newState,
        campaignsInfos: action.data
      };
    default:
      return newState;
  }
};

export default campaignsReducer;
