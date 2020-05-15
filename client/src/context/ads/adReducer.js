const adReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ADS':
      return {
        ...state,
        ads: action.payload,
      };
    case 'GET_AD':
      return {
        ...state,
        ad: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default adReducer;
