import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import uniqueId from 'lodash/uniqueId'

export default ({ contacts, removeContact }) => {
    if (contacts.length === 0) {
        return <div>Список контактов пуст</div>
    }

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Имя Фамилия</th>
        <th>Номер телефона</th>
        <th>Удалить контакт</th>
      </tr>
    </thead>
    <tbody>
        {contacts.map(({name, surname, phone, id}) =>(
            <tr key={uniqueId()}>
        <td>{name} {surname}</td>
        <td>{phone}</td>
        <td><Button variant="secondary" onClick={removeContact(id)} >Х</Button></td>
            </tr>
        ))}
    </tbody>
  </Table>
  );
};
