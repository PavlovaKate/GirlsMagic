const React = require("react");

function Layout({ title, children }) {
  return (
    <html lang="ru">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/script.js" />
        <script defer src="/scripts/auth.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
