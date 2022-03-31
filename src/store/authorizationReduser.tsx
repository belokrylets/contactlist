import { authorization, AuthorizationTypes, IAuthorization } from "../types/authorization";

const defaultState: IAuthorization = {
    authorization: {login: '', password: ''},
    authorisationError: false,
  }
  export const authorizationReduser = (state = defaultState, action: authorization): IAuthorization => {
    switch (action.type) {
      case AuthorizationTypes.DATA_INPUT:
       return {...state, authorization: {...state.authorization, [action.payload.name]: action.payload.value}};
      case AuthorizationTypes.DATA_CLEARING:
        return {...state, authorization: { login: '', password: '' }};
    case AuthorizationTypes.ERROR_AUTHORIZATION:
        return {...state, authorisationError: true};
    case AuthorizationTypes.SUCCESS_AUTHORIZATION:
        return {...state, authorisationError: false};
      default:
        return state;
    }
  };