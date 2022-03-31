import {IContact} from './newContact'

export interface IUserData {
    id: null | number;
    name: string;
    surname: string;
    login: string;
    password: string;
    contacts: [] | IContact[];
}
export interface IUser {
    user: IUserData;
  }
  
  export enum UserTypes {
    CHANGING_CONTACTS = 'CHANGING_CONTACTS',
    REMOVE_CONTACTS = 'REMOVE_CONTACTS',
    GET_USER = 'GET_USER',
    RESET_USER = 'RESET_USER',
  }
  
  interface ChangingContactAction {
    type: UserTypes.CHANGING_CONTACTS;
    payload: {
      name: string;
      phone: string;
    };
  }
  interface RemoveContactAction {
    type: UserTypes.REMOVE_CONTACTS
    payload: IContact[];
  }
  
  interface GetUserAction {
    type: UserTypes.GET_USER;
    payload: IUserData;
  }
  interface ResetUserAction {
    type: UserTypes.RESET_USER
  }
  
  
  export type user = ChangingContactAction | RemoveContactAction | GetUserAction | ResetUserAction;
