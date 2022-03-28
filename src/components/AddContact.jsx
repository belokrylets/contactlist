import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch, useSelector } from "react-redux";

const AddContact = () => {
  const dispath = useDispatch();

  const changeContact = () => {
    dispath({ type: "CHANGING_CONTACTS", payload: newContact });
  };

  const newContact = useSelector((state) => state.newContact.newContact);

  const addContact = (e) => {
    e.preventDefault();
    dispath({
      type: "ADD_CONTACT",
      payload: { name: e.target.name, value: e.target.value }
    });
  };

  const clearingContact = () => {
    dispath({ type: "CLEARING_CONTACT" });
  };

  const submitAddContact = (e) => {
    e.preventDefault();
    changeContact();
    clearingContact();
  };
  const { name, phone } = newContact;
  return (
    <>
      <Form>
        <InputGroup className="mb-3">
          <FormControl
            name="name"
            type="text"
            placeholder="Введите имя и фамилию"
            value={name}
            onChange={addContact}
          />
          <FormControl
            name="phone"
            type="text"
            placeholder="Введите номер"
            value={phone}
            onChange={addContact}
          />
          <Button
            disabled={!name || !phone ? true : false}
            variant="primary"
            type="submit"
            onClick={submitAddContact}
          >
            Добавить
          </Button>
        </InputGroup>
      </Form>
    </>
  );
};
export default AddContact;
