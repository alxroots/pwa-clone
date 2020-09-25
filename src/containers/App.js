import React from 'react';
import Header from '../components/Header';
import Profile from './Profile';
import styled, { createGlobalStyle } from 'styled-components';
import logo from '../GitHub-Mark-Light-64px.png';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppStyled = styled.div`
  text-align: center;
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <AppStyled>
      <Header logo={logo} />
      <Profile />
    </AppStyled>
    </>
  );
}

export default App;
