import apisauce from 'apisauce';
import { REQUEST_URL } from '../config/requestUrl';

const create = (baseURL = REQUEST_URL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    timeout: 10000,
  });

  const setTokenToHeaders = (token) => {
    api.setHeaders({
      Authorization: token ? `Bearer ${token}` : null,
    });
  };

  const loginUser = (email, password) => api.post('login/', {
    email,
    password,
  });
  const registrationUser = (email, password) => api.post('registration/', {
    email,
    password,
  });
  return {
    setTokenToHeaders,
    loginUser,
    registrationUser,
  };
};

export default {
  create,
};
