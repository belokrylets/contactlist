import { INewContact, newContact, NewContactTypes } from "../types/newContact";

const defaultState: INewContact = {
  newContact: { name: "", phone: "" }
};
export const newContactReduser = (state = defaultState, action: newContact): INewContact => {
  switch (action.type) {
    case NewContactTypes.ADD_CONTACT:
      return {
        ...state,
        newContact: {
          ...state.newContact,
          [action.payload.name]: action.payload.value
        }
      };
    case NewContactTypes.CLEARING_CONTACT:
      return { ...state, newContact: { name: "", phone: "" } };
    default:
      return state;
  }
};
