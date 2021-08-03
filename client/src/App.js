import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import Player from './components/Player';
import About from './components/About';
import MusicDetailPage from './components/MusicDetailPage';
import Upload from './components/Upload';

import styled from 'styled-components';
import GlobalStyle from './Globalstyle';

const PlayerWrapper = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 30;
  width: 100%;
`;

function App() {
  const nowPlaying = useSelector((state) => state.music.play);

  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/music/:musicId" component={MusicDetailPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/upload" component={Upload} />
      </Switch>
      {/* Audio Player */}
      {nowPlaying && (
        <PlayerWrapper>
          <Player />
        </PlayerWrapper>
      )}
    </Router>
  );
}

export default App;
