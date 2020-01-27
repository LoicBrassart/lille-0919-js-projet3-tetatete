const initialState = {
  filterAmbassadors: null,
  filterCauses: null,
  campaignsInfo: [],
  campaignInfoById: [],
  jwt: null,
  isSuperAdmin: null,
  isAdmin: null,
  isLogged: false
};

const reducer = (state = initialState, action) => {
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
        jwt: action.value,
        isLogged: true
      };
    case "GET_CAMPAIGNS_INFO":
      return {
        ...state,
        campaignsInfo: action.data
      };
    case "GET_CAMPAIGN_BY_ID":
      return {
        ...state,
        campaignInfoById: action.data
      };
    case "AMB_SANTE":
      return { ...state, filterAmbassadors: 1, filterCauses: null };
    case "AMB_HUMANITAIRE":
      return { ...state, filterAmbassadors: 2, filterCauses: null };
    case "AMB_CULTURE":
      return { ...state, filterAmbassadors: 3, filterCauses: null };
    case "AMB_SPORT":
      return { ...state, filterAmbassadors: 4, filterCauses: null };
    case "AMB_ECOLOGIE":
      return { ...state, filterAmbassadors: 5, filterCauses: null };
    case "AMB_EDUCATION":
      return { ...state, filterAmbassadors: 6, filterCauses: null };
    case "AMB_ALL":
      return { ...state, filterAmbassadors: null, filterCauses: null };
    case "ASS_SANTE":
      return { ...state, filterCauses: 1, filterAmbassadors: null };
    case "ASS_HUMANITAIRE":
      return { ...state, filterCauses: 2, filterAmbassadors: null };
    case "ASS_CULTURE":
      return { ...state, filterCauses: 3, filterAmbassadors: null };
    case "ASS_SPORT":
      return { ...state, filterCauses: 4, filterAmbassadors: null };
    case "ASS_ECOLOGIE":
      return { ...state, filterCauses: 5, filterAmbassadors: null };
    case "ASS_EDUCATION":
      return { ...state, filterCauses: 6, filterAmbassadors: null };
    case "ASS_ALL":
      return { ...state, filterCauses: null, filterAmbassadors: null };
    default:
      return state;
  }
};

export default reducer;
