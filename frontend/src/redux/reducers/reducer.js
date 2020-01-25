const initialState = {
   campaignsInfo: [],
   campaignInfoById: [],
  filter: null,
};

const reducer = (state = initialState, action) => {
   const newState = JSON.parse(JSON.stringify(state));
   switch (action.type) {
      case "GET_CAMPAIGNS_INFO":
         return {
            ...newState,
            campaignsInfo: action.data
         }
      case "GET_CAMPAIGN_BY_ID":
         return {
            ...newState,
            campaignInfoById: action.data
         }
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