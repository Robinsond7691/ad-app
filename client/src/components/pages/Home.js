import React from 'react';
import ListAdItems from '../ads/ListAdItems';
import { loadUser, useAuthDispatch } from '../../context/auth/authContext';

const Home = () => {
  const authDispatch = useAuthDispatch();

  React.useEffect(() => {
    loadUser(authDispatch);
  }, [authDispatch]);

  return <ListAdItems />;
};

export default Home;
