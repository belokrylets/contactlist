import { Dispatch } from "redux";
import { IUserData, user, UserTypes } from "../types/user";

export const fetchUser = (login: string) => {
  return (dispath: Dispatch<user>) => {
    fetch("https://my-json-server.typicode.com/belokrylets/myserver/users")
      .then((response) => response.json())
      .then((users) => users.filter((user: IUserData) => user.login === login))
      .then(([user]) => {
        if (user !== undefined) {
          dispath({ type: UserTypes.GET_USER, payload: user });
        } else {
          dispath({ type: UserTypes.RESET_USER });
        }
      });
  };
};

