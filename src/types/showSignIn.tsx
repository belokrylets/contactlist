export interface IShowSignIn {
  showSignIn: boolean;
}

export enum ShowSignInTypes {
  SHOW = 'SHOW',
  HIDE = 'HIDE',
}

interface ShowAction {
  type: ShowSignInTypes.SHOW
}
interface HideAction {
  type: ShowSignInTypes.HIDE
}

export type showSignIn = ShowAction | HideAction;