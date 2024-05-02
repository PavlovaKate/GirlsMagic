const React = require("react");
const Navbar = require("./Navbar");

function Layout({ title, user, children }) {
  return (
    <html lang="ru">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/style.css" />
        {/* <script defer src="/scripts/script.js" /> */}
        <script defer src="/scripts/auth.js" />
      </head>
      <body>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
