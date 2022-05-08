import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/Button/Button';
import { createUserOnApi } from '../../services/api'

import './CreateUser.css';

function initialState() {
  return { name: '', email: '', password: '' };
}

const CreateUser = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setUser } = useContext(StoreContext);
  const history = useHistory();

  async function createUser({ name, email, password }) {
    await createUserOnApi(name, email, password)
    .then(result => {
      setUser(result.data.user)
      history.push('/login')
    })
    .catch(error => ({ error: error.message }))
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

    createUser(values);

    setError(error);
    setValues(initialState);
  }

  return (
    <div className="wrapper">
      <div className="user-login">
        <div class="Logo">
          <h1 className="user-login__title">Criar Usuário</h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className="user-login__form-control">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={onChange}
              value={values.name} />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={onChange}
              value={values.email} />
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
            Criar Usuário
          </UIButton>
        </form>
        <div className="return-to-login">
          <a href="/login">Voltar para login</a>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;