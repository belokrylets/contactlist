import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import SignIn from './SignIn';
import SignUp from './SignUp';
export default ({authorisationError, buttonSignIn, handleChangeSignIn, authorization, buttonSignOut, state, user, handleCloseshowSignUp, handleShowshowSignUp, showSignUp, handleCloseshowSignIn, handleShowshowSignin, showSignIn}) => {
    const { name, surname } = user;
    const renderAuthorized = () => (
        <>
        <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="#home">Список контактов</Navbar.Brand>
          <div className="btn-group" role="group" aria-label="Basic example">
              <div>{name} {surname }</div>
          </div>
          <Button variant='secondary' onClick={buttonSignOut}>Выйти</Button>
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
          <SignIn authorisationError={authorisationError} buttonSignIn={buttonSignIn} handleChangeSignIn={handleChangeSignIn} authorization={authorization} handleCloseshowSignIn={handleCloseshowSignIn} handleShowshowSignin={handleShowshowSignin} showSignIn={showSignIn} />
          <SignUp handleCloseshowSignUp={handleCloseshowSignUp} handleShowshowSignUp={handleShowshowSignUp} showSignUp={showSignUp} />
          </div>
          </Container>
        </Navbar>
      </>
    )

    return state === 'authorized' ? renderAuthorized() : renderNotAuthorized()
}