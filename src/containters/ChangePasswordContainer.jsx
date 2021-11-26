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
  const { checkCurrent } = userData;
  const dispatch = useDispatch();
  const history = useHistory();

  // const onCheckPreviousPassword = () => {
  // dispatch(checkCurrentPassword({ account, password: inputs.current }));
  // };

  const onSubmit = (data) => {
    try {
      console.log(data);
      dispatch(updatePassword(data));
    } catch (err) {
      alert('비밀번호 변경에 실패했습니다');
    }
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
      tabState={tabState}
      pageState={pageState}
      inputs={inputs}
      onChangeInputs={onChangeInputs}
      onSubmit={onSubmit}
      onCheckSamePassword={onCheckSamePassword}
      currentState={checkCurrent}
      sameState={sameState}
    />
  );
};

export default ChangePasswordContainer;
