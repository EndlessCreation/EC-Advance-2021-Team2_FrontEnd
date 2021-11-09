import styled from 'styled-components';

// Login and Signup
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

export const TIMPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
`;
