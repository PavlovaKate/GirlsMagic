const router = require('express').Router();

const RegistrationPage = require('../../components/RegistrationPage');
const AuthorizationPage = require('../../components/AuthorizationPage');

router.get('/registration', (req, res) => {
  try {
    res.send(res.renderComponent(RegistrationPage, { title: 'Регистрация' }));
  } catch ({ message }) {
    res.status(500).json('Ошибочка');
  }
});

router.get('/authorization', (req, res) => {
  try {
    res.send(res.renderComponent(AuthorizationPage, { title: 'Вход' }));
  } catch ({ message }) {
    res.status(500).json('Ошибочка');
  }
});

module.exports = router;
