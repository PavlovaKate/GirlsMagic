const React = require('react');
const Layout = require('./Layout');

function AuthorizationPage({ title }) {
  return (
    <Layout title={title}>
      <h1>С возвращением на наш магический сайт</h1>
      <form className='Authorization'>
        <input type='email' name='email' placeholder='Email' required />
        <input type='password' name='password' placeholder='Пароль' required />
        <button type='submit'>Войти</button>
      </form>
    </Layout>
  );
}

module.exports = AuthorizationPage;
