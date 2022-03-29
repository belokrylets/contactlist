import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbars = () => {
  const navigate = useNavigate()
  const dispath  =  useDispatch();
  const user = useSelector(state => state.user.user)
  const statePage = useSelector(state => state.statePage.statePage);

  const disableAuthorization = () => {
    navigate("../", { replace: true });
    dispath({ type: 'DISABLE_AUTHORIZATION'})
  }
  
  const { name, surname } = user;
 
    const renderAuthorized = () => (
        <>
        <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="#home">Список контактов</Navbar.Brand>
          <div className="btn-group" role="group" aria-label="Basic example">
              <div>{name} {surname }</div>
          </div>
          <Button variant='secondary' onClick={disableAuthorization}>Выйти</Button>
          </Container>
        </Navbar>
      </>
    )
    
    const renderNotAuthorized = () => (
        <>
        <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="#home">Список контактов</Navbar.Brand>
          <div className="btn-group" role="group" aria-label="Basic example">
          <SignIn />
          <SignUp />
          </div>
          </Container>
        </Navbar>
      </>
    )

    return statePage === 'authorized' ? renderAuthorized() : renderNotAuthorized()
}
export default Navbars;