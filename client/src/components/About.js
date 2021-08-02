import React from 'react';

const About = () => {
  return (
    <div
      style={{
        background: '#343A40',
        color: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        width: '100vw',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <a
        href="https://github.com/seungwonleee"
        target="_blank"
        rel="noreferrer noopener"
        style={{ color: '#FFFFFF', textDecoration: 'none' }}
      >
        Made By seungwonleee
      </a>
      <div>email: seungwon.code@gmail.com</div>
    </div>
  );
};

export default About;
