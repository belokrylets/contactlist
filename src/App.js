import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars';
import ErrorPage from './pages/ErrorPage';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import Registration from './pages/Registration';
import HomePage from './pages/HomePage';


const App = () => {

  return (
        <Router>
          <Navbars/>
        <Routes>
        <Route path="/" element={<Registration/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate replace to='/404' />} />
        </Routes>
    </Router>
)
}

export default App;
