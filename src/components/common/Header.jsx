import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

const Header = ({ user, onLogout, pathname }) => {
  const [scroll, setScroll] = useState(window.scrollY);
  const handleScroll = () => setScroll(window.scrollY);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <StyledHeader scroll={scroll}>
      {user ? (
        <LoginWrapper>
          {pathname === '/' ? (
            <StyledLink to="/tag">
              <AiOutlineUnorderedList size="30" />
            </StyledLink>
          ) : (
            <StyledLink to="/">
              <FaHome size="30" />
            </StyledLink>
          )}
          <SearchInput type="text" />
          <NavWrapper>
            <ul>
              <li>
                <div>Profile</div>
              </li>
              <li>
                <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
              </li>
              <li>
                <MdAccountCircle
                  size="30"
                  onClick={() => {
                    history.push('/mypage');
                  }}
                />
              </li>
            </ul>
          </NavWrapper>
        </LoginWrapper>
      ) : (
        <LogoutWrapper>
          <StyledLink to="/">
            <h1>TIM</h1>
          </StyledLink>

          <NavWrapper>
            <Line></Line>
            <ul>
              <li>
                <StyledLink to="/login">로그인</StyledLink>
              </li>
              <li>
                <StyledLink to="/signup">회원가입</StyledLink>
              </li>
            </ul>
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
  padding: 0 30px;
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
  padding: 0 30px;
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
  & > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    & > li {
      list-style-type: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 2px;
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
  text-decoration: none;
  color: #000000;
`;
const LogoutButton = styled.button`
  border: none;
  background: none;
`;

export default Header;
