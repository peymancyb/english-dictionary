import React from 'react';
import styled from '@emotion/styled'
import ReactList from 'react-list';
import { observer } from 'mobx-react-lite';
import { useStore } from '../hooks/useStore';
import { splitWordByKeyword } from '../helpers';

const WordsContainer = styled.div`
  height: 380px;
  overflow: scroll;
  margin: 40px;
`

const Row = styled.div`
  border-bottom-color: hsl(0, 0%, 80%);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  height: 40px;
  display: flex;
  align-items: center;
`

export const Word = styled.b<{
  isMatch?: boolean
}>`
  color: ${({ isMatch }) => isMatch ? 'cornflowerblue' : 'black'};
  font-weight: lighter;
  font-size: 16px;
`
export const NotFound = styled.p`
  text-align: center;
`

const WordsComponent = () => {
  const store = useStore();

  const renderItem = (index: number, key: string | number) => {
    const word = store.words.values[index];
    if (store.search.length === 0) {
      return (
        <Row key={key}>
          <Word>{word}</Word>
        </Row>
      )
    }
    const parts = splitWordByKeyword(word, store.search);
    return (
      <Row>
        <Word>
          {parts.map((part: string, i: number) => {
            const isMatch = part.toLocaleLowerCase() === store.search.toLocaleLowerCase()
            return (
              <Word key={`${part}-${i}`} isMatch={isMatch}>
                {part}
              </Word>
            )
          })}
        </Word>
      </Row>
    )
  }

  return (
    <WordsContainer>
      {store.words.count === 0 ? <NotFound>No matching words found!</NotFound> : (
        <ReactList
          itemRenderer={renderItem}
          length={store.words.count}
          type='uniform'
        />
      )}
    </WordsContainer>
  )
};

export const Words = observer(WordsComponent)