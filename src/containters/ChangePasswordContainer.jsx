import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { updatePassword } from '../modules/user';

import ChangePassword from '../components/mypage/ChangePassword';

const InitInputs = {
  current: '',
  new: '',
  check: '',
};

const ChangePasswordContainer = ({ tabState, pageState }) => {
  const [inputs, setInputs] = useState(InitInputs);
  const [sameState, setSameState] = useState();

  const userData = useSelector(({ user }) => user);
  // const auth = useSelector(({ auth }) => auth);
  // const { account } = userData.user;
  const { checkCurrent } = userData;
  const dispatch = useDispatch();
  const history = useHistory();
  const onCheckPreviousPassword = () => {
    // dispatch(checkCurrentPassword({ account, password: inputs.current }));
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(updatePassword(data));
  };
  const onCheckSamePassword = () => {
    if (inputs.new === inputs.check) {
      setSameState(true);
    } else {
      setSameState(false);
    }
  };

  const onChangeInputs = (e) => {
    const { value, id } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  return (
    <ChangePassword
      // id={id}
      tabState={tabState}
      pageState={pageState}
      inputs={inputs}
      onChangeInputs={onChangeInputs}
      onSubmit={onSubmit}
      onCheckPreviousPassword={onCheckPreviousPassword}
      onCheckSamePassword={onCheckSamePassword}
      currentState={checkCurrent}
      sameState={sameState}
    />
  );
};

export default ChangePasswordContainer;
