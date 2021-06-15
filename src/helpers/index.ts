import { SearchResult } from "../store";

export const removeSpecialCharacters = (text: string): string => {
  if(typeof text !== 'string') {
    return '';
  }
  return  text.replace(/[^\w\s]/gi, '');
}

export const splitWordByKeyword = (word: string, keyword: string) : string[] => {
  return word.split(new RegExp(`(${keyword})`, 'gi'))
}

export const filterWordsByStartingLetters = (words: string[], search: string) : SearchResult => {
  const filteredWords = words.filter(word => {
    return word.startsWith(search)
  })
  return {
    values: filteredWords,
    count: filteredWords.length
  }
}

export const filterWordsByEndingLetters = (words: string[], search: string) : SearchResult => {
  const filteredWords = words.filter(word => {
    return word.endsWith(search)
  })
  return {
    values: filteredWords,
    count: filteredWords.length
  }
}

export const filterWordsByExactLetters = (words: string[], search: string) : SearchResult => {
  const filteredWords = words.filter(word => {
    return word === search
  })
  return {
    values: filteredWords,
    count: filteredWords.length
  }
}

export const filterWordsByContainLetters = (words: string[], search: string) : SearchResult => {
  const filteredWords = words.filter(word => {
    return word.includes(search)
  })
  return {
    values: filteredWords,
    count: filteredWords.length
  }
}