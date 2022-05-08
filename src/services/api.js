import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/'
})

export const getApiToken = async (name, password) => {
  const credentials = {
    name: name,
    password: password,
  }
  
  return api.post('/login', credentials);
};

export const getProducts = async (token) => {  
  const headers = {
    Authorization: token
  }

  return api.get('/products', { headers: headers })
};

export const createUserOnApi = async (name, email, password) => {  
  const userData = {
    name: name,
    email: email,
    password: password,
  }

  return api.post('/user', userData)
};

export const createProductOnApi = async (token, name, description, price) => {  
  const headers = {
    Authorization: token
  }

  const productData = {
    name: name,
    description: description,
    price: price,
  }
  console.log(productData)

  return api.post('/product', productData, { headers: headers })
};

