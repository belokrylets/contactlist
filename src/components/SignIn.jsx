import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

export default ({authorisationError, buttonSignIn, authorization, handleChangeSignIn, handleShowshowSignin, handleCloseshowSignIn, showSignIn}) => {
const  {login, password} = authorization;
var pStyle = {
    color: 'red',

  };
  const renderAuthorisationError = () => {
      if (authorisationError) {
        return (<Form.Text className="text-muted">
        <p style={pStyle}>Неверный логин или пароль.</p>
      </Form.Text>)
      }
}
return (
<>
    <Button variant="secondary" onClick={handleShowshowSignin}>
        Вход
    </Button>

    <Modal show={showSignIn} onHide={handleCloseshowSignIn}>
        <Modal.Header closeButton>
          <Modal.Title>
            Для входа в личный кабинет введите логин и пароль
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
          <Form>
  <Form.Group className="mb-3">
    <Form.Label>Логин</Form.Label>
    <Form.Control type="text" name='login' value={login} onChange={handleChangeSignIn} placeholder="Введите логин" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Пароль</Form.Label>
    <Form.Control type="password" name='password' value={password} onChange={handleChangeSignIn} placeholder="Введите пароль" />
  </Form.Group>
 {renderAuthorisationError()}
</Form>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={buttonSignIn}>
            Войти
          </Button>
        </Modal.Footer>
      </Modal>
      </>
)
}