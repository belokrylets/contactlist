import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

export default ({ newContact, handleChangeNewContact, submitAddContact }) => {
    const {name, surname, phone} = newContact;
return (
<>
<Form>
  <Form.Group className="mb-3">
    <Form.Control name='name' type="text" placeholder="Введите имя" value={name} onChange={handleChangeNewContact} />
    <Form.Control name='surname' type="text" placeholder="Введите фамилия" value={surname} onChange={handleChangeNewContact} />
    <Form.Control name='phone' type="text" placeholder="Введите номер" value={phone} onChange={handleChangeNewContact} />
    <Button variant="primary" type="submit" onClick={submitAddContact}>
    Добавить контакт
  </Button>
  </Form.Group>
</Form>
      </>
)
}