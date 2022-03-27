import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from 'react-redux';


const AddContact = () => {
  const dispath  =  useDispatch();

  const changeContact = () => {
    dispath({type: 'CHANGING_CONTACTS', payload: newContact})
  }

  const newContact = useSelector(state => state.newContact.newContact)

  const addContact = (e) => {
    e.preventDefault();
    dispath({type: 'ADD_CONTACT', payload: {name: e.target.name, value: e.target.value}})
  }

  const clearingContact = () => {
    dispath({type: 'CLEARING_CONTACT'})
  }

  const submitAddContact = (e) => {
    e.preventDefault();
    changeContact()
    clearingContact()
  }
    const {name, surname, phone} = newContact;
return (
<>
<Form>
  <Form.Group className="mb-3">
    <Form.Control name='name' type="text" placeholder="Введите имя" value={name} onChange={addContact} />
    <Form.Control name='surname' type="text" placeholder="Введите фамилия" value={surname} onChange={addContact} />
    <Form.Control name='phone' type="text" placeholder="Введите номер" value={phone} onChange={addContact} />
    <Button variant="primary" type="submit" onClick={submitAddContact}>
    Добавить контакт
  </Button>
  </Form.Group>
</Form>
      </>
)
}
export default AddContact;