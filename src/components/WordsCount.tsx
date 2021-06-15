import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from '@emotion/styled'
import { useStore } from '../hooks/useStore';

const Counter = styled.p`
  text-align: right;
  margin-right: 40px;
`

function WordsCountComponent() {
  const store = useStore();
  return (
    <Counter>Words: {store.words.count}</Counter>
  )
}

export const WordsCount = observer(WordsCountComponent)