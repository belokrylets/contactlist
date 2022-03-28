const defaultState = {
    search: { name: "" },
    showModal: false,
    resultSearch: []
  };
  export const searchReduser = (state = defaultState, action) => {
    switch (action.type) {
      case "SEARCH_CONTACT":
        return {
          ...state,
          search: {
            ...state.search,
            [action.payload.name]: action.payload.value
          }
        };
      case "CLEARING_SEARCH":
        return {
          ...state,
          search: { name: "" },
          showModal: false,
          resultSearch: []
        };
      case "SHOW_RESULT":
        return { ...state, showModal: true };
      case "RESULT_SEARCH":
        return { ...state, resultSearch: action.payload };
      default:
        return state;
    }
  };
  