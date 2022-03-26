import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default ({ handleCloseshowSignUp, handleShowshowSignUp, showSignUp }) => {

  return (
    <>
      <Button variant="secondary" onClick={handleShowshowSignUp}>
        Регистрация
      </Button>

      <Modal show={showSignUp} onHide={handleCloseshowSignUp}>
        <Modal.Header closeButton>
          <Modal.Title>
            Для регистрации заполните все поля
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
          <Form>
          <Form.Group className="mb-3">
    <Form.Label>Имя</Form.Label>
    <Form.Control type="text" placeholder="Введите имя" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Фамилия</Form.Label>
    <Form.Control type="text" placeholder="Введите фамилию" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Логин</Form.Label>
    <Form.Control type="text" placeholder="Придумайте логин" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Пароль</Form.Label>
    <Form.Control type="password" placeholder="Придумайте пароль" />
  </Form.Group>
</Form>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseshowSignUp}>
            Зарегистрироваться
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
