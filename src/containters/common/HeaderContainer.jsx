import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import Header from '../../components/common/Header';
import { initAuth } from '../../modules/auth';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  const { pathname } = useLocation();
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    dispatch(initAuth());
  };
  return <Header user={user} onLogout={onLogout} pathname={pathname} />;
};

export default HeaderContainer;
