import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #343a40;
  color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <a
        href="https://github.com/seungwonleee"
        target="_blank"
        rel="noreferrer noopener"
      >
        Made By seungwonleee
      </a>
      <div>email: seungwon.code@gmail.com</div>
    </Wrapper>
  );
};

export default About;
