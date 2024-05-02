const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <ul>
        <li>
          {user ? (
            <p>
              {` Привет
              ${user.name}`}
            </p>
          ) : (
            <p>Пожалуйста зарегестрируйтесь</p>
          )}
        </li>
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="/user">Личный кабинет</a>
        </li>
        <li>
          <a href="/cards">Магические карты</a>
        </li>
        {user ? (
          <>
            <li>
              <a href="/cart">Корзина</a>
            </li>
            <li>
              <a href="/logout">Выйти</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/auth/registration">Зарегистрироваться</a>
            </li>
            <li>
              <a href="/auth/authorization">Войти</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

module.exports = Navbar;
