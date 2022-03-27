const defaultState = {
    statePage: 'not authorized',
  }
  export const statePageReduser = (state = defaultState, action) => {
    switch (action.type) {
      case 'AUTHORIZE':
       return {...state, statePage: 'authorized'};
      case 'DISABLE_AUTHORIZATION':
        return {...state, statePage: 'not authorized'};
      default:
        return state;
    }
  };