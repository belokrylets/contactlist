const defaultState = {
    authorization: {login: '', password: ''},
    authorisationError: false,
  }
  export const authorizationReduser = (state = defaultState, action) => {
    switch (action.type) {
      case 'DATA_INPUT':
       return {...state, authorization: {...state.authorization, [action.payload.name]: action.payload.value}};
      case 'DATA_CLEARING':
        return {...state, authorization: { login: '', password: '' }};
    case 'ERROR_AUTHORIZATION':
        return {...state, authorisationError: true};
    case 'SUCCESS_AUTHORIZATION':
        return {...state, authorisationError: false};
      default:
        return state;
    }
  };