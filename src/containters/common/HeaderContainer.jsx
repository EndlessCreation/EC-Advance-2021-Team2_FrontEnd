import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import Header from '../../components/common/Header';
import { initAuth } from '../../modules/auth';
import { logout, check } from '../../modules/user';
import { check as getUser } from '../../api/auth';

const HeaderContainer = () => {
  const { pathname } = useLocation();
  const { auth } = useSelector(({ auth }) => auth);
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const history = useHistory();
  const onLogout = () => {
    dispatch(logout());
    dispatch(initAuth());
  };

  // useEffect(() => {
  //   dispatch(check());
  // }, []);

  useEffect(() => {
    const userCheck = async () => {
      try {
        const a = await getUser();
        console.log(a);
      } catch (e) {
        dispatch(initAuth());
        alert('로그인이 필요합니다');
        history.push('login');
        return;
      }
      dispatch(check());
    };
    userCheck();
  }, []);

  return <Header user={user} onLogout={onLogout} pathname={pathname} />;
};

export default HeaderContainer;
