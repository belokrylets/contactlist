const defaultState = {
    showSignIn: false,
  }
  export const showSignInReduser = (state = defaultState, action) => {
    switch (action.type) {
      case 'SHOW':
       return {...state, showSignIn: true };
      case 'HIDE':
        return {...state, showSignIn: false};
      default:
        return state;
    }
  };