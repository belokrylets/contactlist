const user = {
    name: 'Сергей',
    surname: 'Белокрылец',
    login: 'Sergio',
    password: 'Sergio',
    contacts: [{name: 'Евгений', surname: 'Прохоров', phone: '89959969777', id: 0},
    {name: 'Виктор', surname: 'Чибизов', phone: '89959969774', id: 1},
    {name: 'Илья', surname: 'Подкатилов', phone: '89959961777', id: 2},
    {name: 'Андрей', surname: 'Посессор', phone: '89219969777', id: 6}],
  };

  export default (login, password) => {
      if (login === user.login && password === user.password) {
          return true;
      }
      return false; 
  }