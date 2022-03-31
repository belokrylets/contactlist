export interface IShowSignUp {
    showSignUp: boolean;
  }
  
  export enum ShowSignUpTypes {
    SHOW_REGISTRATION = 'SHOW_REGISTRATION',
    HIDE_REGISTRATION = 'HIDE_REGISTRATION',
  }
  
  interface ShowRegistrationAction {
    type: ShowSignUpTypes.SHOW_REGISTRATION
  }
  interface HideRegistrationAction {
    type: ShowSignUpTypes.HIDE_REGISTRATION
  }
  
  export type showSignUp = ShowRegistrationAction | HideRegistrationAction;