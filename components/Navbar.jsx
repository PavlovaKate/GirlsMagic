const React = require("react");

function Navbar({ user }) {
  return (
    <nav>
      <ul>
        <li>
          {user ? (
            <p>
              {` Привет
              ${user.userName}`}
            </p>
          ) : (
            <p>Пожалуйста зарегестрируйтесь</p>
          )}
        </li>
        <li>
          <a href="/">main</a>
        </li>
        <li>
          <a href="/users">users</a>
        </li>
        <li>
          <a href="/posts">posts</a>
        </li>
        {user ? (
          <li>
            <a href="/exit">exit</a>
          </li>
        ) : (
          <>
            <li>
              <a href="/auth/registration">registration</a>
            </li>
            <li>
              <a href="/auth/authorization">authorization</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

module.exports = Navbar;
