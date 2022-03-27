import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars';
import List from './components/List';
import AddContact from './components/AddContact';
import { useSelector } from 'react-redux';


function App() {

  const statePage = useSelector(state => state.statePage.statePage)
  const user = useSelector(state => state.user.user)

  const renderNotAuthorized = () => {
    return (
      
      <div className="App">
      <Navbars user={user} />
      <div>
        <h3>Добро пожаловать в SPA приложение 'Список контактов'!</h3> 
        <p>Для использования приложения необходимо войти в систему или зарегестрироватся</p>
        <p>Тестовые логин/пароль: <b>Sergio/Sergio</b></p>
      </div>    
    </div>
    )
  }
  const renderAuthorized = () => {
    return (
      <div className="App">
      <Navbars user={user} />
    <div>Список контактов пользователя {user.name} {user.surname}</div>
    <AddContact />
    <List />
    </div>
    )
  }
  switch (statePage) {
    case 'not authorized':
      return renderNotAuthorized();
      case 'authorized':
        return renderAuthorized();
    default:
      throw new Error(`неизвестное состояние: ${statePage}`);
  }
}

export default App;
