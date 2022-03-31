import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useTypeSelector } from '../hooks/useTypeSelector'; 


const SignUp: React.FC = () => {
  const dispath = useDispatch();
  const showSignUp = useTypeSelector((state) => state.showSignUp.showSignUp);
  const newUser = useTypeSelector((state) => state.newUser.newUser);
  const registrationDataInput = (e: { target: { name: string; value: string; }; }) => {
    dispath({
      type: "REGISTRATION_DATA_INPUT",
      payload: { name: e.target.name, value: e.target.value }
    });
  };

  const hide = () => {
    dispath({ type: "HIDE_REGISTRATION" });
  };
  const show = () => {
    dispath({ type: "SHOW_REGISTRATION" });
  };

  return (
    <>
      <Button variant="secondary" onClick={show}>
        Регистрация
      </Button>

      <Modal show={showSignUp} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Для регистрации заполните все поля</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Имя</Form.Label>
                <Form.Control
                  name="name"
                  value={newUser.name}
                  type="text"
                  placeholder="Введите имя"
                  onChange={registrationDataInput}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control
                  name="surname"
                  value={newUser.surname}
                  type="text"
                  placeholder="Введите фамилию"
                  onChange={registrationDataInput}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Логин</Form.Label>
                <Form.Control
                  name="login"
                  value={newUser.login}
                  type="text"
                  placeholder="Придумайте логин"
                  onChange={registrationDataInput}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  name="password"
                  value={newUser.password}
                  type="password"
                  placeholder="Придумайте пароль"
                  onChange={registrationDataInput}
                />
              </Form.Group>
            </Form>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={hide}>
            Зарегистрироваться
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SignUp;

