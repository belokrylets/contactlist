import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Navbars from './components/Navbars';
import List from './components/List';
import AddContact from './components/AddContact';
import uniqueId from 'lodash/uniqueId'
import isLogin from './isLogin';


function App() {
  const [state, setState] =  useState('not authorized');
  const [user, setUser] = useState({
    name: 'Сергей',
    surname: 'Белокрылец',
    login: 'Sergio',
    password: 'Sergio',
    contacts: [{name: 'Иван', surname: 'Иванов', phone: '89959969777', id: 0},
    {name: 'Семен', surname: 'Семенов', phone: '89959969774', id: 1},
    {name: 'Илья', surname: 'Ильин', phone: '89959961777', id: 2},
    {name: 'Андрей', surname: 'Андреев', phone: '89219969777', id: 6}],
  });
  const [authorization, setAuthorization] =  useState({login: '', password: ''});
  const [newContact, setNewContact] =  useState({name: '', surname: '', phone: ''});
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [authorisationError, AuthorisationError] = useState(false)

  const handleCloseshowSignUp = () => setShowSignUp(false);
  const handleShowshowSignUp = () => setShowSignUp(true);
  const handleCloseshowSignIn = () => setShowSignIn(false)

  const buttonSignIn = () => {
    if (isLogin(authorization.login, authorization.password)) {
      setState('authorized')
      setShowSignIn(false)
      AuthorisationError(false)
    } else {
      AuthorisationError(true)
    }
  };

  const handleShowshowSignin = () => setShowSignIn(true);
  console.log(authorization)
  const buttonSignOut = () => setState('not authorized')
  const removeContact = (id) => (e) => {
    e.preventDefault();
    const newList = user.contacts.filter((contact) => contact.id !== id);
    setUser({ ...user, contacts: newList });
  };
  const handleChangeNewContact = (e) => {
    e.preventDefault();
    setNewContact({...newContact, [e.target.name]: e.target.value})
}

const handleChangeSignIn = (e) => {
  e.preventDefault();
  setAuthorization({...authorization, [e.target.name]: e.target.value})
}


const submitAddContact = (e) => {
  e.preventDefault();
  setUser({...user, contacts: [...user.contacts, {...newContact, id: Number(uniqueId())}]})
  setNewContact({name: '', surname: '', phone: ''})
}

  const renderNotAuthorized = () => {
    return (
      <div className="App">
      <Navbars authorisationError={authorisationError} buttonSignIn ={buttonSignIn} authorization={authorization} handleChangeSignIn={handleChangeSignIn} buttonSignOut={buttonSignOut} state={state} user={user} handleCloseshowSignUp={handleCloseshowSignUp} handleShowshowSignUp={handleShowshowSignUp} showSignUp={showSignUp} handleCloseshowSignIn={handleCloseshowSignIn} handleShowshowSignin={handleShowshowSignin} showSignIn={showSignIn}/>
      <div>
        <h3>Добро пожаловать в SPA приложение 'Список контактов'!</h3> 
        <p>Для использования приложения необходимо войти в систему или зарегестрироватся</p>
      </div>    
    </div>
    )
  }
  const renderAuthorized = () => {
    return (
      <div className="App">
      <Navbars buttonSignOut={buttonSignOut} state={state} user={user} handleCloseshowSignUp={handleCloseshowSignUp} handleShowshowSignUp={handleShowshowSignUp} showSignUp={showSignUp} handleCloseshowSignIn={handleCloseshowSignIn} handleShowshowSignin={handleShowshowSignin} showSignIn={showSignIn}/>
    <div>Список контактов пользователя {user.name} {user.surname}</div>
    <AddContact newContact={newContact} handleChangeNewContact={handleChangeNewContact} submitAddContact={submitAddContact} />
    <List contacts={user.contacts} removeContact={removeContact}/>
    </div>
    )
  }
  switch (state) {
    case 'not authorized':
      return renderNotAuthorized();
      case 'authorized':
        return renderAuthorized();
    default:
      throw new Error(`неизвестное состояние: ${state}`);
  }
}

export default App;
