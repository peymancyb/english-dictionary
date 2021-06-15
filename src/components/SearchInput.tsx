import React from 'react';
import styled from  '@emotion/styled'
import { observer } from 'mobx-react-lite';
import Select from 'react-select';
import { SearchModes } from '../store';
import { useStore } from '../hooks/useStore';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Input = styled.input`
  margin-left: 10px;
  width: 260px;
  margin-left: 10px;
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  cursor: default;
  padding-left: 15px;
`

const SelectOption = styled(Select)`
  width: 150px;
  border-radius: 5px;
`

interface Option {
  value: SearchModes,
  label: string;
}

const options: Option[] = [
  { value: SearchModes.startLetter, label: 'Starts with' },
  { value: SearchModes.lastLetter, label: 'Ends with' },
  { value: SearchModes.exactLetter, label: 'Exact Letter' },
  { value: SearchModes.containLetter, label: 'Contain letter' }
]

const SearchInputComponent : React.FC = () => {
  const store = useStore();

  const handleOnSearchModeChange = (selectedOption: any) => {
    store.searchMode = selectedOption.value
  }

  const handleOnSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.search = event.target.value
  }

  return (
    <SearchContainer>
      <SelectOption defaultValue={options[0]} options={options} onChange={handleOnSearchModeChange} />
      <Input value={store.search} onChange={handleOnSearch} placeholder="Search a word..."/>
    </SearchContainer>
  )
}

export const SearchInput = observer(SearchInputComponent)