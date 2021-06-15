import { makeAutoObservable } from "mobx";
import { 
  filterWordsByContainLetters, 
  filterWordsByEndingLetters, 
  filterWordsByExactLetters, 
  filterWordsByStartingLetters, 
  removeSpecialCharacters 
} from "../helpers";

/**
 * JSON source: https://github.com/dwyl/english-words
 */
import { DictionaryWordsList } from '../resources/dictionary'

export type SearchResult = {
  values: string[];
  count: number;
};

export enum SearchModes {
  startLetter = 'start-letter',
  containLetter = 'contain-letter',
  lastLetter = 'last-letter',
  exactLetter = 'exact-letter',
}

class DictionaryStore {
  private _search: string = '';
  private _searchMode: SearchModes = SearchModes.startLetter;

  constructor(){
    makeAutoObservable(this)
  }

  public set search(text: string){
    this._search = removeSpecialCharacters(text);
  }

  public get search(){
    return this._search;
  }

  public set searchMode(mode: SearchModes){
    this._searchMode = mode;
  }

  public get searchMode(){
    return this._searchMode;
  }

  public get words() : SearchResult {
    switch(this.searchMode){
      case SearchModes.startLetter:
        return filterWordsByStartingLetters(DictionaryWordsList, this.search);
      case SearchModes.containLetter:
        return filterWordsByContainLetters(DictionaryWordsList, this.search);
      case SearchModes.exactLetter:
        return filterWordsByExactLetters(DictionaryWordsList, this.search);
      case SearchModes.lastLetter:
        return filterWordsByEndingLetters(DictionaryWordsList, this.search);
      default:
        return {
          values: DictionaryWordsList,
          count: DictionaryWordsList.length,
        };
    }
  }
}

export const Store = new DictionaryStore();