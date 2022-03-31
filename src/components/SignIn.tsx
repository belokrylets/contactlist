import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import isLogin from "../isLogin";
import { fetchUser } from "../asyncAction/user";
import { useNavigate } from "react-router-dom";
import { useTypeSelector } from '../hooks/useTypeSelector'; 

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const user = useTypeSelector((state) => state.user.user);
  const authorize = () => {
    dispath({ type: "AUTHORIZE" });
  };
  const dispath = useDispatch();
  const showSignIn = useTypeSelector((state) => state.showSignIn.showSignIn);
  const hide = () => {
    dispath({ type: "HIDE" });
  };
  const show = () => {
    dispath({ type: "SHOW" });
  };

  const authorization = useTypeSelector((state) => state.authorization);
  const dataInput = (e: { target: { name: string; value: string; }; }) => {
    dispath({
      type: "DATA_INPUT",
      payload: { name: e.target.name, value: e.target.value }
    });
    dispath(fetchUser(e.target.value));
  };
  const dataClearing = () => {
    dispath({ type: "DATA_CLEARING" });
  };

  const errorAuthorization = () => {
    dispath({ type: "ERROR_AUTHORIZATION" });
  };

  const succesAuthorization = () => {

  
    dispath({ type: "SUCCESS_AUTHORIZATION" });
  };

  const { login, password } = authorization.authorization;

  const buttonSignIn = () => {
    dispath(fetchUser(login));
    if (isLogin(user, login, password)) {
      authorize();
      hide();
      succesAuthorization();
      dataClearing();
      navigate("../home", { replace: true });
    } else {
      errorAuthorization();
    }
  };

  var pStyle = {
    color: "red"
  };
  const renderAuthorisationError = () => {
    if (authorization.authorisationError) {
      return (
        <Form.Text className="text-muted">
          <p style={pStyle}>Неверный логин или пароль.</p>
        </Form.Text>
      );
    }
  };
  return (
    <>
      <Button variant="secondary" onClick={show}>
        Вход
      </Button>

      <Modal show={showSignIn} onHide={hide}>
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
                <Form.Control
                  type="text"
                  name="login"
                  value={login}
                  onChange={dataInput}
                  placeholder="Введите логин"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={dataInput}
                  placeholder="Введите пароль"
                />
              </Form.Group>
              {renderAuthorisationError()}
            </Form>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={!login || !password} variant="primary" onClick={buttonSignIn}>
            Войти
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignIn;

