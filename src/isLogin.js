const isLogin = (user, login, password) => {
    if (login === user.login && password === user.password) {
      return true;
    }
    return false;
  };
  export default isLogin;
  