const initialState = {
  filterAmbassadors: null,
  filterCauses: null
};

function reducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case "AMB_SANTE":
      return { filterAmbassadors: 1, filterCauses: null };
    case "AMB_HUMANITAIRE":
      return { filterAmbassadors: 2, filterCauses: null };
    case "AMB_CULTURE":
      return { filterAmbassadors: 3, filterCauses: null };
    case "AMB_SPORT":
      return { filterAmbassadors: 4, filterCauses: null };
    case "AMB_ECOLOGIE":
      return { filterAmbassadors: 5, filterCauses: null };
    case "AMB_EDUCATION":
      return { filterAmbassadors: 6, filterCauses: null };
    case "AMB_ALL":
      return { filterAmbassadors: null, filterCauses: null };
    case "ASS_SANTE":
      return { filterCauses: 1, filterAmbassadors: null };
    case "ASS_HUMANITAIRE":
      return { filterCauses: 2, filterAmbassadors: null };
    case "ASS_CULTURE":
      return { filterCauses: 3, filterAmbassadors: null };
    case "ASS_SPORT":
      return { filterCauses: 4, filterAmbassadors: null };
    case "ASS_ECOLOGIE":
      return { filterCauses: 5, filterAmbassadors: null };
    case "ASS_EDUCATION":
      return { filterCauses: 6, filterAmbassadors: null };
    case "ASS_ALL":
      return { filterCauses: null, filterAmbassadors: null };
    default:
      return newState;
  }
}
export default reducer;
