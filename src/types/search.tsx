interface ISearchData {
    name: string;
}
export interface ISearch {
    search: ISearchData;
    showModal: boolean;
    resultSearch: []
  }
  
  export enum SearchTypes {
    SEARCH_CONTACT = 'SEARCH_CONTACT',
    CLEARING_SEARCH = 'CLEARING_SEARCH',
    SHOW_RESULT = 'SHOW_RESULT',
    RESULT_SEARCH = 'RESULT_SEARCH',
  }
  
  interface SearchContactAction {
    type: SearchTypes.SEARCH_CONTACT;
    payload: {
      name: string;
      value: string;
    }
  }
  interface ClearingSearchAction {
    type: SearchTypes.CLEARING_SEARCH;
  }
  interface ShowResultAction {
    type: SearchTypes.SHOW_RESULT;

  }
  interface ResultSearchAction {
    type: SearchTypes.RESULT_SEARCH;
    payload: []
  }

  export type search = SearchContactAction | ClearingSearchAction | ShowResultAction | ResultSearchAction;