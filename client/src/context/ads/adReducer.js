const adReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ADS':
      return {
        ...state,
        ads: action.payload,
        loading: false,
      };
    case 'GET_AD':
      return {
        ...state,
        ad: action.payload,
        loading: false,
      };
    case 'CREATE_AD':
      return {
        ...state,
        ads: [action.payload, ...state.ads],
      };
    case 'SET_LOADING_TRUE':
      return {
        ...state,
        loading: true,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default adReducer;
