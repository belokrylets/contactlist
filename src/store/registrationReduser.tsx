import { INewUser, newUser, RegistrationTypes } from "../types/registration";

const defaultState: INewUser = {
    newUser: {
      id: null,
      name: '',
      surname: '',
      login: '',
      password: '',
      contacts: [],
    }
  }
  export const registrationReduser = (state = defaultState, action: newUser) => {
    switch (action.type) {
      case RegistrationTypes.REGISTRATION_DATA_INPUT:
       return {...state, newUser: {...state.newUser, [action.payload.name]: action.payload.value}};
      case RegistrationTypes.REGISTRATION_DATA_CLEARING:
        return {...state, newUser: defaultState.newUser};
      default:
        return state;
    }
  };