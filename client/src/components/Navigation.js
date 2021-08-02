import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import AlbumIcon from '@material-ui/icons/Album';
import MenuIcon from '@material-ui/icons/Menu';

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 7vh;
  align-items: center;

  a {
    text-decoration: none;
    color: #000000;
  }
`;

const Logo = styled.div`
  display: flex;
  margin: 0.5rem;

  h1 {
    font-size: 1.2rem;
    padding-top: 0.2rem;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
`;

const Navigation = () => {
  const [menuState, setMenuState] = useState(false);

  const ToggleMenu = useCallback(() => {
    setMenuState(!menuState);
  }, [menuState]);
  console.log('현재 메뉴 상태 ==> ', menuState);
  return (
    <NavWrapper>
      <Link to="/">
        <Logo>
          <AlbumIcon />
          <h1>Classic Music</h1>
        </Logo>
      </Link>
      <Nav onClick={ToggleMenu}>
        <MenuIcon />
      </Nav>
    </NavWrapper>
  );
};

export default Navigation;
