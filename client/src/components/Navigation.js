import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Navigation = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="navigation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>
          <ListItem button key="Classic Music">
            <ListItemText primary="Classic Music" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {[
          { text: 'About', route: '/About' },
          { text: 'Upload', route: '/Upload' },
        ].map((data, index) => (
          <Link
            to={data.route}
            key={data.text}
            style={{ textDecoration: 'none', color: '#000000' }}
          >
            <ListItem button key={data.text}>
              <ListItemText primary={data.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <NavWrapper>
      <Link to="/">
        <Logo>
          <AlbumIcon />
          <h1>Classic Music</h1>
        </Logo>
      </Link>
      <Nav onClick={toggleDrawer('right', true)}>
        <MenuIcon />
      </Nav>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </NavWrapper>
  );
};

export default Navigation;
