const defaultState = {
    newUser: {
      id: null,
      name: '',
      surname: '',
      login: '',
      password: '',
      contacts: [],
    }
  }
  export const registrationReduser = (state = defaultState, action) => {
    switch (action.type) {
      case 'REGISTRATION_DATA_INPUT':
       return {...state, newUser: {...state.newUser, [action.payload.name]: action.payload.value}};
      case 'REGISTRATION_DATA_CLEARING':
        return {...state, newUser: defaultState};
      default:
        return state;
    }
  };