import { IStatePage, StatePage, StatePageTypes } from "../types/statePage";



const defaultState: IStatePage = {
    statePage: 'not authorized',
  }
  export const statePageReduser = (state = defaultState, action: StatePage): IStatePage => {
    switch (action.type) {
      case StatePageTypes.AUTHORIZE:
       return {...state, statePage: 'authorized'};
      case StatePageTypes.DISABLE_AUTHORIZATION:
        return {...state, statePage: 'not authorized'};
      default:
        return state;
    }
  };