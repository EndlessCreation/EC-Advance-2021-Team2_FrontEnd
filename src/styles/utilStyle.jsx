import styled from 'styled-components';
//body

// Login and Signup
export const PageWrapper = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  /* @media ${(props) => props.theme.mobile} {
    background-color: red;
  } */
`;

export const FormWrapper = styled.div`
  background-color: #ffffff;
  display: grid;
  height: 75%;
  width: 50%;
  align-items: center;
  justify-items: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  & > h1 {
    margin: 0;
  }
  @media ${(props) => props.theme.mobile} {
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.bgColor};
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  color: #e70000;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`;
export const InputName = styled.h4`
  margin: 0 10px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: none;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
