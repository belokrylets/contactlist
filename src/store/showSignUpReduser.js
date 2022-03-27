const defaultState = {
    showSignUp: false,
  }
  export const showSignUpReduser = (state = defaultState, action) => {
    switch (action.type) {
      case 'SHOW_REGISTRATION':
       return {...state, showSignUp: true };
      case 'HIDE_REGISTRATION':
        return {...state, showSignUp: false};
      default:
        return state;
    }
  };