import React from 'react';
import axios from 'axios';
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

//Load User

//Register User
export const registerUser = async (dispatch, newUser) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/users', newUser, config);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'REGISTER_FAIL', payload: err.response.data.msg });
  }
};
//Login User

//Logout

//Clear Errors
