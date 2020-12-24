import React from 'react';

import WritePost from './components/WritePost';
import PostList from './components/PostList';
import styled from 'styled-components';

const App = () => {
  return (
    <AppContainer className="App">
      <h1>hyperPost</h1>
      <WritePost />
      <PostList />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  h1 {
    text-align: center;
    margin: 20px 0;
  }
`;

export default App;
