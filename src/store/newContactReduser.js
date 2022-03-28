const defaultState = {
  newContact: { name: "", phone: "" }
};
export const newContactReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        newContact: {
          ...state.newContact,
          [action.payload.name]: action.payload.value
        }
      };
    case "CLEARING_CONTACT":
      return { ...state, newContact: { name: "", phone: "" } };
    default:
      return state;
  }
};
