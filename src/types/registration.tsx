interface INewUserData {
    id: null | number;
    name: string;
    surname: string;
    login: string;
    password: string;
    contacts: [];
}
export interface INewUser {
    newUser: INewUserData;
  }
  
  export enum RegistrationTypes {
    REGISTRATION_DATA_INPUT = 'REGISTRATION_DATA_INPUT',
    REGISTRATION_DATA_CLEARING = 'REGISTRATION_DATA_CLEARING',
  }
  
  interface RegistrationDataInputAction {
    type: RegistrationTypes.REGISTRATION_DATA_INPUT;
    payload: {
      name: string;
      value: string;
    }
  }
  interface RegistrationDataClearingAction {
    type: RegistrationTypes.REGISTRATION_DATA_CLEARING
  }
  
  export type newUser = RegistrationDataInputAction | RegistrationDataClearingAction;