import apisauce from 'apisauce';
import qs from 'qs';
import { REQUEST_URL } from '../config/requestUrl';

const create = (baseURL = REQUEST_URL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    timeout: 10000,
  });

  const setTokenToHeaders = (token) => {
    api.setHeaders({
      Authorization: token ? `Bearer ${token}` : null,
    });
  };

  const loginUser = (email, password) => api.post('login/', qs.stringify({
    email,
    password,
  }, { encode: true }));

  const registrationUser = (email, password) => api.post('registration/', qs.stringify({
    email,
    password,
  }, { encode: true }));

  return {
    setTokenToHeaders,
    loginUser,
    registrationUser,
  };
};

export default {
  create,
};
