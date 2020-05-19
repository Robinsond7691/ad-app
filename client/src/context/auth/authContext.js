import React from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import authReducer from './authReducer';

const AuthContext = React.createContext();
const AuthDispatch = React.createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = React.useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={state}>
      <AuthDispatch.Provider value={dispatch}>{children}</AuthDispatch.Provider>
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const authContext = React.useContext(AuthContext);
  return authContext;
};

const useAuthDispatch = () => {
  const authDispatch = React.useContext(AuthDispatch);
  return authDispatch;
};

export { AuthProvider, useAuthContext, useAuthDispatch };

//Actions
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

//Load User
export const loadUser = async (dispatch) => {
  //load token into global headers
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({ type: 'USER_LOADED', payload: res.data });
  } catch (err) {
    dispatch({ type: 'AUTH_ERROR' });
  }
};

//Register User
export const registerUser = async (dispatch, newUser) => {
  try {
    const res = await axios.post('/api/users', newUser, config);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });

    loadUser(dispatch);
  } catch (err) {
    dispatch({ type: 'REGISTER_FAIL', payload: err.response.data.msg });
  }
};

//Login User
export const loginUser = async (dispatch, user) => {
  try {
    const res = await axios.post('/api/auth', user, config);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });

    loadUser(dispatch);
  } catch (err) {
    dispatch({ type: 'LOGIN_FAIL', payload: err.response.data.msg });
  }
};

//Logout

//Clear Errors
