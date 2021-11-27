import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import { InputTitle, MypageForm, SubmitButton } from '../../styles/utilStyle';

const MyPageMain = ({ pageState, tabState }) => {
  const history = useHistory();

  if (!pageState) return null;
  if (pageState) {
    return (
      <StyledMyPageMainWrap>
        <StyledTitleWrap tabState={tabState}>
          <InputTitle main>마이페이지</InputTitle>
        </StyledTitleWrap>
      </StyledMyPageMainWrap>
    );
  }
};
export default MyPageMain;

const StyledMyPageMainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const StyledTitleWrap = styled.div`
  position: fixed;
  max-height: 600px;
  min-height: 300px;
  max-width: 600px;
  min-width: 340px;
  top: calc(50%);
  left: ${({ tabState }) =>
    tabState ? 'calc((100% - 340px) / 2)' : 'calc(50%)'};
  transform: translate(-50%, -50%);
  min-height: 300px;
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
`;
