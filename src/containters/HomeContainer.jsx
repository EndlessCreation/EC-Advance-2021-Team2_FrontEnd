import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import { logout } from '../modules/auth';

const HomeContainer = () => {
  const { auth } = useSelector(({ auth }) => ({ auth: auth.auth }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  console.log(auth);
  return <HomeComponent auth={auth} onLogout={onLogout} />;
};

export default HomeContainer;
