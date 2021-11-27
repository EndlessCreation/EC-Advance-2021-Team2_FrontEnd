import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import { InputTitle, MypageForm, SubmitButton } from '../styles/utilStyle';

const My404Page = (props) => {
  const history = useHistory();

  return (
    <Styledmy404PageWrap>
      <MypageForm>
        <InputTitle main>존재하지 않는 페이지입니다.</InputTitle>

        <SubmitButton
          style={{ marginTop: '20px' }}
          onClick={() => {
            history.push('/');
          }}
        >
          메인페이지로 이동
        </SubmitButton>
      </MypageForm>
    </Styledmy404PageWrap>
  );
};
export default My404Page;

const Styledmy404PageWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
