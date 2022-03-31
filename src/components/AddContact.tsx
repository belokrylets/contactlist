import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch } from "react-redux";
import { useTypeSelector } from '../hooks/useTypeSelector'; 

const AddContact: React.FC = () => {
  const dispath = useDispatch();

  const changeContact = () => {
    dispath({ type: "CHANGING_CONTACTS", payload: newContact });
  };

  const newContact = useTypeSelector((state => state.newContact.newContact))

  const addContact = (e: { preventDefault: () => void; target: { name: string; value: string; }; }) => {
    e.preventDefault();
    dispath({
      type: "ADD_CONTACT",
      payload: { name: e.target.name, value: e.target.value }
    });
  };

  const clearingContact = () => {
    dispath({ type: "CLEARING_CONTACT" });
  };

  const submitAddContact = (e: { preventDefault: () => void; }) => {
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

