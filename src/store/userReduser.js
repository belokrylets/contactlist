import uniqueId from "lodash/uniqueId";
const defaultState = {
    user: {
      id: null,
      name: '',
      surname: '',
      login: '',
      password: '',
      contacts: [],
    }
  }

  export const userReduser = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGING_CONTACTS': 
          return {...state, user: {...state.user, contacts: [...state.user.contacts, {...action.payload, id: uniqueId()}]}};
        case 'REMOVE_CONTACTS': 
          return {...state, user: {...state.user, contacts: action.payload}}
        case 'GET_USER':
          return {...state, user: action.payload}
        case 'RESET_USER':
          return {...state, user: defaultState}
      default:
        return state;
    }
  };