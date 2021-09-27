import styled from 'styled-components';

// src/pages 폴더에 있는 각 페이지에 대한 Wrapper입니다.

export const LoginPageWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: Roboto;
  background: #fafcf9;
  @media ${(props) => props.theme.mobile} {
    padding: 0;
  }
`;

export const SignupPageWrapper = styled.div`
  position: relative;
  display: flex;
  height: 120vh;
  width: 100vw;
  padding: 80px 0;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  background: #fafcf9;
  @media ${(props) => props.theme.mobile} {
    padding: 0;
    align-items: normal;
  }
`;

export const FindPageWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  background: #fafcf9;
  @media ${(props) => props.theme.mobile} {
    padding: 0;
    align-items: normal;
  }
`;

export const MainPageWrapper = styled.div`
  height: 100vh;
`;

export const GridViewPageWrapper = styled.div`
  height: 100vh;
`;
