import uniqueId from "lodash/uniqueId";
import { IUser, user, UserTypes } from "../types/user";


const defaultState: IUser = {
    user: {
      id: null,
      name: '',
      surname: '',
      login: '',
      password: '',
      contacts: [],
    }
  }

  export const userReduser = (state = defaultState, action: user): IUser => {
    switch (action.type) {
        case UserTypes.CHANGING_CONTACTS: 
          return {...state, user: {...state.user, contacts: [...state.user.contacts, {...action.payload, id: Number(uniqueId())}]}};
        case UserTypes.REMOVE_CONTACTS: 
          return {...state, user: {...state.user, contacts: action.payload}}
        case UserTypes.GET_USER:
          return {...state, user: action.payload}
        case UserTypes.RESET_USER:
          return {...state, user: defaultState.user}
      default:
        return state;
    }
  };