import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import uniqueId from 'lodash/uniqueId'
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector'; 
import { IContact } from "../types/newContact";


const List: React.FC = () => {
  const dispath  =  useDispatch();
  const user = useTypeSelector(state => state.user.user)

  const {contacts} = user;
  const removeContacts = (newList: IContact[]) => {
  
    dispath({type: 'REMOVE_CONTACTS', payload: newList})
  }

  const removeContact = (id: number | null | undefined) => (e: { preventDefault: () => void; }) => {
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
        {contacts.map((contact) =>(
            <tr key={uniqueId()}>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td><Button variant="secondary" onClick={removeContact(contact.id)} >Х</Button></td>
            </tr>
        ))}
    </tbody>
  </Table>
  );
};
export default List;
