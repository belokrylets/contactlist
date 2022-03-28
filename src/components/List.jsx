import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import uniqueId from 'lodash/uniqueId'
import { useDispatch, useSelector } from 'react-redux';

const List = () => {
  const dispath  =  useDispatch();
  const user = useSelector(state => state.user.user)

  const {contacts} = user;
  const removeContacts = (newList) => {
  
    dispath({type: 'REMOVE_CONTACTS', payload: newList})
  }

  const removeContact = (id) => (e) => {
    e.preventDefault();
    const newList = contacts.filter((contact) => contact.id !== id);
    
    removeContacts(newList);
  };

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
export default List;