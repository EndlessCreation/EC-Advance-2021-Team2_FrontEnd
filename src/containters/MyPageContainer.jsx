import React, { useEffect, useState } from 'react';
import MenuTab from '../components/mypage/MenuTab';
import ChangePasswordContainer from './ChangePasswordContainer';
import WithDrawalContainer from './WithDrawalContainer';

const InitpageState = { changePassword: false, withDrawal: false };

const MyPageContainer = (props) => {
  const [tabState, setTabState] = useState();
  const [pageState, setPageState] = useState(InitpageState);

  useEffect(() => {});

  return (
    <>
      <MenuTab pageState={pageState}>
        {/* <ChangePasswordContainer /> */}
        {/* <WithDrawalContainer /> */}
      </MenuTab>
    </>
  );
};

export default MyPageContainer;
