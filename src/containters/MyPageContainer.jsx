import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { updatePassword } from '../api/auth';
import MenuButton from '../components/mypage/MenuButton';
import MenuTab from '../components/mypage/MenuTab';
import { initAuth } from '../modules/auth';
import { check, logout } from '../modules/user';
import ChangePasswordContainer from './ChangePasswordContainer';
import WithDrawalContainer from './WithDrawalContainer';

const InitpageState = { main: false, changePassword: false, withDrawal: false };

const MyPageContainer = (props) => {
  const [tabState, setTabState] = useState(false);
  const [pageState, setPageState] = useState(InitpageState);

  const userData = useSelector(({ user }) => user);
  const { user, checkError } = userData;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (checkError) {
      alert('로그인이 필요합니다');
      history.replace('/login');
    }
  }, [user]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(initAuth());
    history.replace('/');
  };
  const onTabStateChange = () => {
    setTabState(!tabState);
  };
  const onPageStateChange = (pageType) => {
    if (
      pageType !== 'main' &&
      pageType !== 'changePassword' &&
      pageType !== 'withDrawal'
    ) {
      console.log('타입 맞는지 체크해주세요');

      return;
    }

    setPageState({ ...InitpageState, [pageType]: 'true' });
  };

  if (user === null) {
    return <div>Loading</div>;
  }

  if (user !== null) {
    return (
      <>
        <MenuButton tabState={tabState} onTabStateChange={onTabStateChange} />
        <MenuTab
          userName={user.name}
          pageState={pageState}
          tabState={tabState}
          onTabStateChange={onTabStateChange}
          onPageStateChange={onPageStateChange}
          onLogout={onLogout}
        />
        <ChangePasswordContainer
          pageState={pageState.changePassword}
          tabState={tabState}
        />
        <WithDrawalContainer
          pageState={pageState.withDrawal}
          tabState={tabState}
        />
      </>
    );
  }
};

export default MyPageContainer;
