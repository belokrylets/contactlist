import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const Search = () => {
  const dispatch = useDispatch();
  const { search, showModal, resultSearch } = useSelector(
    (state) => state.search
  );
  const { contacts } = useSelector((state) => state.user.user);
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({
      type: "SEARCH_CONTACT",
      payload: { name: e.target.name, value: e.target.value }
    });
  };

  const buttonSearch = () => {
    const result = contacts.filter((contact) => {
      const contactNameLower = contact.name.toLowerCase();
      const searchNameLower = search.name.toLowerCase();
      return contactNameLower.includes(searchNameLower);
    });
    dispatch({ type: "RESULT_SEARCH", payload: result });
    dispatch({ type: "SHOW_RESULT" });
  };

  const buttonClose = () => {
    dispatch({ type: "CLEARING_SEARCH" });
  };

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          name="name"
          placeholder="Поиск по ФИО"
          value={search.name}
          onChange={handleSearch}
        />
        <Button
          disabled={!search.name}
          onClick={buttonSearch}
          variant="secondary"
          id="button-addon2"
        >
          Найти
        </Button>
      </InputGroup>
      <Modal show={showModal} onHide={buttonClose}>
        <Modal.Header closeButton>
          <Modal.Title>По запросу "{search.name}" найдены:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {resultSearch.length === 0 ? (
            <p> По вашему запросу ничего не найдено</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Имя Фамилия</th>
                  <th>Номер телефона</th>
                </tr>
              </thead>
              <tbody>
                {resultSearch.map(({ name, phone, id }) => (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{phone}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={buttonClose} variant="primary">
            закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Search;
