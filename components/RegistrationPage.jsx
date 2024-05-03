const React = require('react');
const Layout = require('./Layout');

function RegistrationPage({ title }) {
  return (
    <Layout title={title}>
      <h1>Вступить в магический клуб</h1>
      <form
        action='/api/auth/registration'
        method='post'
        className='Registration'
      >
        <input type='text' placeholder='Имя' name='name' required />
        <input type='text' placeholder='Город' name='city' required />
        <input type='email' placeholder='Email' name='email' required />
        <input type='password' placeholder='Пароль' name='password' required />
        <button type='submit'>Зарегистрироваться</button>
      </form>
    </Layout>
  );
}

module.exports = RegistrationPage;
