const initialState = {
  filterAmbassadors: null,
  filterCauses: null,
  campaignsInfo: [],
  campaignInfoById: [],
  dataJWT: null,
  isLogged: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATAJWT":
      return {
        ...state,
        dataJWT: action.value,
        isLogged: true
      };
    case "GET_CAMPAIGNS_INFO":
      return { ...state, campaignsInfo: action.data };
    case "GET_CAMPAIGN_BY_ID":
      return { ...state, campaignInfoById: action.data };
    case "AMBASSADORS_FILTER":
      return { ...state, filterAmbassadors: action.payload };
    case "CAUSES_FILTER":
      return { ...state, filterCauses: action.payload };
    case "SWITCH":
      return {
        ...state,
        filterAmbassadors: null,
        filterCauses: null
      };
    default:
      return state;
  }
};

export default reducer;
