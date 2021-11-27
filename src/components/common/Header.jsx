import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { exitIconSrc } from '../../lib/assets/exitIcon.js';
import SearchContainer from '../../containters/SearchContainer';

const Header = ({ user, onLogout, pathname }) => {
  const [scroll, setScroll] = useState(window.scrollY);
  const handleScroll = () => setScroll(window.scrollY);
  const history = useHistory();

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // }, []);
  return (
    <StyledHeader scroll={scroll}>
      {user ? (
        <LoginWrapper>
          {pathname === '/' ? (
            <HeaderMenuButton onClick={() => history.push('/tag')}>
              <AiOutlineUnorderedList size="30" />
            </HeaderMenuButton>
          ) : (
            <HeaderMenuButton onClick={() => history.push('/')}>
              <FaHome size="30" />
            </HeaderMenuButton>
          )}
          <SearchContainer pathname={pathname} />
          <NavWrapper>
            <HeaderMenuButton onClick={onLogout}>
              <Icon src={exitIconSrc} size={30} />
            </HeaderMenuButton>
            {/* <Line /> */}
            <HeaderMenuButton>
              <MdAccountCircle
                size="30"
                onClick={() => {
                  history.push('/mypage');
                }}
              />
            </HeaderMenuButton>
          </NavWrapper>
        </LoginWrapper>
      ) : (
        <LogoutWrapper>
          <HeaderMenuButton
            onClick={() => {
              history.push('/');
            }}
          >
            <h1>TIM</h1>
          </HeaderMenuButton>

          <NavWrapper>
            <Line />
            <HeaderMenuButton
              onClick={() => {
                history.push('/login');
              }}
            >
              로그인
            </HeaderMenuButton>
            <HeaderMenuButton
              onClick={() => {
                history.push('/signup');
              }}
            >
              회원가입
            </HeaderMenuButton>
          </NavWrapper>
        </LogoutWrapper>
      )}
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  // 여기 왜 sticky??
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 99;
  background: white;
  box-shadow: ${(props) => props.scroll > 20 && '0 4px 4px rgb(0, 0, 0, 0.2)'};
`;
const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  flex-grow: 0.5;
  height: 20px;
`;
const LogoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  & > h1 {
    margin: 0;
  }
`;
const NavWrapper = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 200px;
  & > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
    & > li {
      list-style-type: none;
      box-sizing: border-box;
      padding: 5px;
      cursor: pointer;
      border-radius: 2px;
      width: 80px;
      text-align: center;
      margin: 0px;
      &:hover {
        background-color: #e4e5e8;
        transition: background-color 200ms linear;
      }
    }
  }
`;
const Line = styled.div`
  width: 1px;
  background: rgba(0, 0, 0, 0.1);
  height: 20px;
  margin: 0 10px;
`;
const StyledLink = styled(Link)`
  /* padding: 35px; */
  box-sizing: border-box;
  text-decoration: none;
  color: #000000;
  width: 100px;
`;
const HeaderMenuButton = styled.button`
  min-width: 100px;
  border: none;
  background: none;
  margin: 0px;
  padding: 10px 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  word-break: keep-all;
  &:hover {
    background-color: #e4e5e8;
    transition: background-color 200ms linear;
  }
`;

const Icon = styled.div`
  width: ${(props) => props.size || 20}px;
  height: ${(props) => props.size || 20}px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Header;
