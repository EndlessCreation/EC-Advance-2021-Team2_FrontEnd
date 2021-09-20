import React, { useState } from 'react';
import FindPassword from '../../components/auth/FindPassword';
import { useHistory } from 'react-router-dom';
import { findPassword, sendEmail, updatePassword } from '../../api/auth';

const FindPasswordContainer = (props) => {
  const [userId, setUserId] = useState(null);
  const history = useHistory();

  const onFindPassword = async ({ account, email, phone_number }) => {
    const response = await findPassword({ account, email, phone_number });
    if (response) {
      setUserId(response.id);
    } else {
      alert('정보를 다시 입력해주세요');
    }
  };

  const onSendEmail = async ({ account, email, phone_number }) => {
    const response = await sendEmail({ account, email, phone_number });
    if (response) {
      alert(`${email}로 임시 비밀번호를 발송했습니다!`);
      history.push('/');
    } else {
      alert('정보를 다시 입력해주세요');
    }
  };

  const onUpdatePassword = async (password) => {
    try {
      const response = await updatePassword({ id: userId, password });
      alert('비밀번호 변경이 완료되었습니다.');
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FindPassword
      userId={userId}
      onFindPassword={onFindPassword}
      onUpdatePassword={onUpdatePassword}
      onSendEmail={onSendEmail}
    />
  );
};
export default FindPasswordContainer;
