export interface IContact {
  id?: null | number;
    name: string;
    phone: string;
}
export interface INewContact {
    newContact: IContact;
  }
  
  export enum NewContactTypes {
    ADD_CONTACT = 'ADD_CONTACT',
    CLEARING_CONTACT = 'CLEARING_CONTACT',
  }
  
  interface AddContactAction {
    type: NewContactTypes.ADD_CONTACT;
    payload: {
      name: string;
      value: string;
    }
  }
  interface ClearingContactAction {
    type: NewContactTypes.CLEARING_CONTACT
  }
  
  export type newContact = AddContactAction | ClearingContactAction;