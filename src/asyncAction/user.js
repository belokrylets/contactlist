export const fetchUser = (login) => {
  return (dispath) => {
    fetch("https://my-json-server.typicode.com/belokrylets/myserver/users")
      .then((response) => response.json())
      .then((users) => users.filter((user) => user.login === login))
      .then(([user]) => {
        if (user !== undefined) {
          dispath({ type: "GET_USER", payload: user });
        } else {
          dispath({ type: "RESET_USER" });
        }
      });
  };
};
