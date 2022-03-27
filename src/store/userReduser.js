import uniqueId from "lodash/uniqueId";
const defaultState = {
    user: {
      id: 1,
      name: 'Сергей',
      surname: 'Белокрылец',
      login: 'Sergio',
      password: 'Sergio',
      contacts: [
        {name: 'Иван', surname: 'Иванов', phone: '89959969777', id: 0},
        {name: 'Семен', surname: 'Семенов', phone: '89959969774', id: 1},
        {name: 'Илья', surname: 'Ильин', phone: '89959961777', id: 2},
        {name: 'Андрей', surname: 'Андреев', phone: '89219969777', id: 6}
      ],
    }
  }

  export const userReduser = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGING_CONTACTS': 
          return {...state, user: {...state.user, contacts: [...state.user.contacts, {...action.payload, id: uniqueId()}]}};
          case 'REMOVE_CONTACTS': 
          return {...state, user: {...state.user, contacts: action.payload}}
      default:
        return state;
    }
  };