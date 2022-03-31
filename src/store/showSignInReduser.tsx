import { IShowSignIn, showSignIn, ShowSignInTypes } from "../types/showSignIn";

const defaultState: IShowSignIn = {
    showSignIn: false,
  }
  export const showSignInReduser = (state = defaultState, action: showSignIn): IShowSignIn => {
    switch (action.type) {
      case ShowSignInTypes.SHOW:
       return {...state, showSignIn: true };
      case ShowSignInTypes.HIDE:
        return {...state, showSignIn: false};
      default:
        return state;
    }
  };