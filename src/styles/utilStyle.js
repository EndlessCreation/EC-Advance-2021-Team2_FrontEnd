import styled, { css } from 'styled-components';

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
  ::placeholder {
    font-family: Roboto;
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: ${({ center }) => center && 'center'};
  }
`;

export const InputForm = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-self: center;
  margin-top: 32px;
`;

export const InputTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  margin: 0;
  ${({ main }) =>
    main &&
    css`
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
    `}
`;

export const SubmitButton = styled.button`
  box-sizing: border-box;
  background: ${({ theme }) => theme.brand[3]};
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: #ffffff;
  cursor: pointer;
  padding: 16px 55px;
  /* margin-top: 18.71px; */
  &:active {
    background-color: ${({ theme }) => theme.brand[2]};
  }
`;

export const MypageForm = styled.div`
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
  padding: 50px 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
