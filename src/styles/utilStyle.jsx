import styled from 'styled-components';

// Login and Signup
export const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  @media ${(props) => props.theme.mobile} {
    padding: 0;
    align-items: normal;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  background: #fbfbfd;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 0;
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.25rem;
`;
