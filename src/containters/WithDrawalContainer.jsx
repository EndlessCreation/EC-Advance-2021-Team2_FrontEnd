import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { deleteAccount } from '../api/auth';
import WithDrawal from '../components/mypage/WithDrawal';
import { initAuth } from '../modules/auth';
import { logout } from '../modules/user';

const WithDrawalContainer = ({ tabState, pageState }) => {
  const [input, setInput] = useState();
  const [textCheckState, setTextCheckState] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleTextCheck = () => {
    if (input === '회원 탈퇴하기') {
      setTextCheckState(true);
    } else {
      setTextCheckState(false);
    }
  };

  const onSubmit = () => {
    if (!textCheckState) {
      alert(`"회원 탈퇴하기" 를 정확하게 입력해주세요`);
    } else {
      if (window.confirm('정말 탈퇴 하시겠습니까?') && textCheckState) {
        deleteAccount();
        history.push('/');
        dispatch(initAuth());
        dispatch(logout());
      }
    }
  };
  const onChangeInput = (e) => {
    const { value, id } = e.target;
    console.log(value);
    setInput(value);
  };

  return (
    <WithDrawal
      tabState={tabState}
      pageState={pageState}
      onSubmit={onSubmit}
      input={input}
      onChangeInput={onChangeInput}
      handleTextCheck={handleTextCheck}
    />
  );
};

export default WithDrawalContainer;
