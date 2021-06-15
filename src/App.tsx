import React from 'react';
import styled from '@emotion/styled'
import { StoreProvider } from './components/StoreProvider';
import { SearchInput } from './components/SearchInput';
import { Words } from './components/Words';
import { WordsCount } from './components/WordsCount';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Content = styled.div`
  width: 600px;
  height: 600px;
  overflow: scroll;
  border-color: cornflowerblue;
  border-style: solid;
  border-radius: 5px;
  border-width: 2px;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 20px 6px #d0d0d0;
`

const HeaderText = styled.p`
  text-align: center;
  font-size: 22px;
`

function App() {
  return (
    <StoreProvider>
      <Container>
        <Content>
          <HeaderText>English Dictionary</HeaderText>
          <SearchInput />
          <WordsCount />
          <Words />
        </Content>
      </Container>
    </StoreProvider>
  );
}

export default App;
