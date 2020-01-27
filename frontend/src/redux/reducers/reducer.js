const initialState = {
  filterAmbassadors: null,
  filterCauses: null,
  campaignsInfo: [],
  campaignInfoById: [],
  jwt: null,
  isSuperAdmin: null,
  isAdmin: null
};

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SUPERADMIN":
      return {
        ...state,
        isSuperAdmin: action.value
      };
    case "ADMIN":
      return {
        ...state,
        isAdmin: action.value
      };
    case "JWT":
      return {
        ...state,
        jwt: action.value
      };
    case "GET_CAMPAIGNS_INFO":
      return {
        ...newState,
        campaignsInfo: action.data
      };
    case "GET_CAMPAIGN_BY_ID":
      return {
        ...newState,
        campaignInfoById: action.data
      };
    case "AMB_SANTE":
      return { ...newState, filterAmbassadors: 1, filterCauses: null };
    case "AMB_HUMANITAIRE":
      return { ...newState, filterAmbassadors: 2, filterCauses: null };
    case "AMB_CULTURE":
      return { ...newState, filterAmbassadors: 3, filterCauses: null };
    case "AMB_SPORT":
      return { ...newState, filterAmbassadors: 4, filterCauses: null };
    case "AMB_ECOLOGIE":
      return { ...newState, filterAmbassadors: 5, filterCauses: null };
    case "AMB_EDUCATION":
      return { ...newState, filterAmbassadors: 6, filterCauses: null };
    case "AMB_ALL":
      return { ...newState, filterAmbassadors: null, filterCauses: null };
    case "ASS_SANTE":
      return { ...newState, filterCauses: 1, filterAmbassadors: null };
    case "ASS_HUMANITAIRE":
      return { ...newState, filterCauses: 2, filterAmbassadors: null };
    case "ASS_CULTURE":
      return { ...newState, filterCauses: 3, filterAmbassadors: null };
    case "ASS_SPORT":
      return { ...newState, filterCauses: 4, filterAmbassadors: null };
    case "ASS_ECOLOGIE":
      return { ...newState, filterCauses: 5, filterAmbassadors: null };
    case "ASS_EDUCATION":
      return { ...newState, filterCauses: 6, filterAmbassadors: null };
    case "ASS_ALL":
      return { ...newState, filterCauses: null, filterAmbassadors: null };
    default:
      return newState;
  }
};

export default reducer;
