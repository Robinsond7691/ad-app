import React, { createContext, useReducer } from 'react';
import adReducer from './adReducer';
import axios from 'axios';

const AdStateContext = createContext();
const AdDispatchContext = createContext();

const AdProvider = ({ children }) => {
  const initialState = {
    ads: [],
  };

  const [state, dispatch] = useReducer(adReducer, initialState);
  return (
    <AdStateContext.Provider value={state}>
      <AdDispatchContext.Provider value={dispatch}>
        {children}
      </AdDispatchContext.Provider>
    </AdStateContext.Provider>
  );
};

//Helper Functions

const useAdState = () => {
  const adState = React.useContext(AdStateContext);
  return adState;
};
const useAdDispatch = () => {
  const adDispatch = React.useContext(AdDispatchContext);
  return adDispatch;
};

export { AdProvider, useAdState, useAdDispatch };

//actions
export const getAds = async (dispatch) => {
  try {
    const res = await axios.get('/api/ads');
    dispatch({ type: 'GET_ADS', payload: res.data });
  } catch (err) {
    console.log('error fetching');
  }
};
