const initialState = {
  filterAmbassadors: null,
  filterCauses: null,
  campaignsInfo: [],
  campaignInfoById: []
};

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "GET_CAMPAIGNS_INFO":
      return { ...newState, campaignsInfo: action.data };
    case "GET_CAMPAIGN_BY_ID":
      return { ...newState, campaignInfoById: action.data };
    case "AMBASSADORS_FILTER":
      return { ...newState, filterAmbassadors: action.payload };
    case "CAUSES_FILTER":
      return { ...newState, filterCauses: action.payload };
    case "SWITCH":
      return {
        ...newState,
        filterAmbassadors: null,
        filterCauses: null
      };
    default:
      return newState;
  }
};

export default reducer;
