import { ISearch, search, SearchTypes } from "../types/search";

const defaultState: ISearch = {
    search: { name: "" },
    showModal: false,
    resultSearch: []
  };
  export const searchReduser = (state = defaultState, action: search): ISearch => {
    switch (action.type) {
      case SearchTypes.SEARCH_CONTACT:
        return {
          ...state,
          search: {
            ...state.search,
            [action.payload.name]: action.payload.value
          }
        };
      case SearchTypes.CLEARING_SEARCH:
        return {
          ...state,
          search: { name: "" },
          showModal: false,
          resultSearch: []
        };
      case SearchTypes.SHOW_RESULT:
        return { ...state, showModal: true };
      case SearchTypes.RESULT_SEARCH:
        return { ...state, resultSearch: action.payload };
      default:
        return state;
    }
  };
  