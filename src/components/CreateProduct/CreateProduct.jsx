import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UIButton from 'components/Button/Button';
import { createProductOnApi } from '../../services/api'
import StoreContext from '../Store/Context';

import './CreateProduct.css';

function initialState() {
  return { name: null, description: null, price: null };
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

    createProduct(values);

    setError(error);
    setValues(initialState);
  }

  return (
    <div className="wrapper">
      <div className="create-product">
        <div class="Logo">
          <h1 className="create-product__title">Criar Produto</h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className="create-product__form-control">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={onChange}
              value={values.name} />
          </div>
          <div className="create-product__form-control">
            <label htmlFor="description">Descrição</label>
            <input
              id="description"
              type="text"
              name="description"
              onChange={onChange}
              value={values.description} />
          </div>
          <div className="create-product__form-control">
            <label htmlFor="price">Preço</label>
            <input
              id="price"
              type="text"
              name="price"
              onChange={onChange}
              value={values.price} />
          </div>
          {error && (
            <div className="create-product__error">{error}</div>
          )}
          <UIButton
            type="submit"
            theme="contained-red-login"
            className="create-product__submit-button"
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