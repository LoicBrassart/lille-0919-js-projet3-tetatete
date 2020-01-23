const initialState = {
   campaignsInfo: [],
   campaignInfoById: [],
}

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

      default:
         return newState;
   }
}

export default reducer;