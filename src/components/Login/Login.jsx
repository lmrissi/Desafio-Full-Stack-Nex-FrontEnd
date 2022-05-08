import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/Button/Button';
import { getApiToken } from 'services/api';

import './Login.css';

function initialState() {
  return { user: null, password: null };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken, setUser } = useContext(StoreContext);
  const history = useHistory();

  async function login({ user, password }) {
    await getApiToken(user, password)
    .then(result => {
      setUser(result.data.user)
      setToken(result.data.token)
      history.push('/products')
    })
    .catch(error => setError(error.response.data))
  }

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    login(values);

    setValues(initialState);
  }

  return (
    <div className="wrapper">
      <div className="user-login">
        <div class="Logo">
          <h1 className="user-login__title">Login</h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className="user-login__form-control">
            <label htmlFor="user">Usuário</label>
            <input
              id="user"
              type="text"
              name="user"
              onChange={onChange}
              value={values.user} />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={onChange}
              value={values.password} />
          </div>
          {error && (
            <div className="user-login__error">{error}</div>
          )}
          <UIButton
            type="submit"
            theme="contained-red-login"
            className="user-login__submit-button"
            rounded
          >
            Entrar
          </UIButton>
        </form>
        <div className="create-user">
          <a href="/user">Criar usuário</a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;