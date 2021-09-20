import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as KakaoIcon } from '../../lib/assets/kakao.svg';
import { ReactComponent as GoogleIcon } from '../../lib/assets/google.svg';
import { ReactComponent as NaverIcon } from '../../lib/assets/naver.svg';

const OAuth = () => {
  return (
    <OAuthForm>
      <GoogleIcon css={OAuthIcon} />
      <KakaoIcon css={OAuthIcon} />
      <NaverIcon css={OAuthIcon} />
    </OAuthForm>
  );
};

const OAuthForm = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const OAuthIcon = css`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  &:hover {
    filter: brightness(0.7);
  }
`;
export default OAuth;
