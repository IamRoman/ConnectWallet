export default {
  // Functions return fixtures
  loginUser: (email, password) => ({
    ok: true,
    status: 200,
    data: require('../fixtures/login.json').data,
  }),
  registrationUser: (email, password) => ({
    ok: true,
    status: 200,
    data: require('../fixtures/registration.json').data,
  }),
  setTokenToHeaders: () => {},
};
