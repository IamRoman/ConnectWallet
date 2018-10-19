export default {
  // Functions return fixtures
  loginUser: (phoneNumber, password) => ({
    ok: true,
    status: 200,
    data: require('../fixtures/login.json').data,
  }),
  facebooklogin: FbToken => ({
    ok: true,
    status: 200,
    data: require('../fixtures/login.json').data,
  }),
  registrationUser: (phoneNumber, password) => ({
    ok: true,
    status: 200,
    data: require('../fixtures/registration.json').data,
  }),
  resetPasswordUser: phoneNumber => ({
    ok: true,
    status: 200,
    data: require('../fixtures/resetPassword.json').data,
  }),
  setTokenToHeaders: () => {},
};
