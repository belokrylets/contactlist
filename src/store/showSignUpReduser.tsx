import { IShowSignUp, ShowSignUpTypes, showSignUp } from "../types/showSignUp";

const defaultState: IShowSignUp = {
    showSignUp: false,
  }
  export const showSignUpReduser = (state = defaultState, action: showSignUp): IShowSignUp => {
    switch (action.type) {
      case ShowSignUpTypes.SHOW_REGISTRATION:
       return {...state, showSignUp: true };
      case ShowSignUpTypes.HIDE_REGISTRATION:
        return {...state, showSignUp: false};
      default:
        return state;
    }
  };