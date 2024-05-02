const React = require("react");
const Layout = require("./Layout");

function RegistrationPage({ title }) {
  return (
    <Layout title={title}>
      <form
        action="/api/auth/registration"
        method="post"
        className="Registration"
      >
        <input type="text" placeholder="name" name="name" />
        <input type="text" placeholder="city" name="city" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">add</button>
      </form>
    </Layout>
  );
}

module.exports = RegistrationPage;
