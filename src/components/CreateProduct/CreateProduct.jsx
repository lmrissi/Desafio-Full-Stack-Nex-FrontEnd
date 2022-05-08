import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UIButton from 'components/Button/Button';
import { createProductOnApi } from '../../services/api'
import StoreContext from '../Store/Context';

import './CreateProduct.css';

function initialState() {
  return { name: '', description: '', price: '' };
}

const CreateProduct = () => {
  const [values, setValues] = useState(initialState);
  const { token } = useContext(StoreContext);
  const [_, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  async function createProduct({ name, description, price }) {
    await createProductOnApi(token, name, description, price)
    .then(result => {
      setProducts(result.data.user)
      history.push('/products')
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

    createProduct(values);

    setError(error);
    setValues(initialState);
  }

  return (
    <div className="wrapper">
      <div className="user-login">
        <div class="Logo">
          <h1 className="user-login__title">Criar Produto</h1>
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
            <label htmlFor="description">Descrição</label>
            <input
              id="description"
              type="text"
              name="description"
              onChange={onChange}
              value={values.description} />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="price">Preço</label>
            <input
              id="price"
              type="text"
              name="price"
              onChange={onChange}
              value={values.price} />
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
            Criar Produto
          </UIButton>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;