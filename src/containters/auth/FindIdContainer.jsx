import React from 'react';
import { findId } from '../../api/auth';
import FindId from '../../components/auth/FindId';

const FindIdContainer = (props) => {
  const onFindId = async ({ name, email }) => {
    const response = await findId({ name, email });
    if (response) {
      alert('회원님의 아이디는' + response + '입니다.');
    } else {
      alert('정보를 다시 입력해주세요');
    }
  };
  return <FindId onFindId={onFindId} />;
};
export default FindIdContainer;
