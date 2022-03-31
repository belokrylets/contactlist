export interface IStatePage {
    statePage: string;
}


export enum StatePageTypes {
  AUTHORIZE = 'AUTHORIZE',
  DISABLE_AUTHORIZATION = 'DISABLE_AUTHORIZATION',
}

interface AuthorizeAction {
  type: StatePageTypes.AUTHORIZE
}
interface DisableAuthorizationAction {
  type: StatePageTypes.DISABLE_AUTHORIZATION
}

export type StatePage = AuthorizeAction | DisableAuthorizationAction;