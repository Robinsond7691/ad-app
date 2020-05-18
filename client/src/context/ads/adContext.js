import React, { createContext, useReducer } from 'react';
import adReducer from './adReducer';
import axios from 'axios';

const AdStateContext = createContext();
const AdDispatchContext = createContext();

const AdProvider = ({ children }) => {
  const initialState = {
    ads: [],
    ad: {},
    loading: false,
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
  dispatch({ type: 'SET_LOADING_TRUE' });
  try {
    const res = await axios.get('/api/ads');
    dispatch({ type: 'GET_ADS', payload: res.data });
  } catch (err) {
    console.log('error fetching');
  }
};

export const getAd = async (dispatch, id) => {
  dispatch({ type: 'SET_LOADING_TRUE' });
  try {
    const res = await axios.get(`/api/ads/${id}`);
    dispatch({ type: 'GET_AD', payload: res.data });
  } catch (err) {
    console.log('error fetching');
  }
};

export const createAd = (dispatch, ad) => {
  dispatch({ type: 'CREATE_AD', payload: ad });
};
