interface IAuthorizationData {
  login: string;
  password: string;
}

export interface IAuthorization {
  authorization: IAuthorizationData;
  authorisationError: boolean;
  }
  
  export enum AuthorizationTypes {
    DATA_INPUT = 'DATA_INPUT',
    DATA_CLEARING = 'DATA_CLEARING',
    ERROR_AUTHORIZATION = 'ERROR_AUTHORIZATION',
    SUCCESS_AUTHORIZATION = 'SUCCESS_AUTHORIZATION',
  }
  
  interface DataInputAction {
    type: AuthorizationTypes.DATA_INPUT;
    payload: {
      name: string;
      value: string;
    }
  }
  interface DataClearingAction {
    type: AuthorizationTypes.DATA_CLEARING
  }
  interface ErrorAuthorizationAction {
    type: AuthorizationTypes.ERROR_AUTHORIZATION;
  }
  interface SuccesAuthorizationAction {
    type: AuthorizationTypes.SUCCESS_AUTHORIZATION
  }
  
  export type authorization = DataInputAction | DataClearingAction | ErrorAuthorizationAction | SuccesAuthorizationAction;