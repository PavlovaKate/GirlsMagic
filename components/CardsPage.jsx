const React = require("react");
const Layout = require("./Layout");
const Card = require("./Card");
const FormFilter = require("./FormFilter");
const FormInput = require("./FormInput");
// const FormAddcard = require('./FormAddcard');

function CardsPage({ title, cards, user, cities }) {
  return (
    <Layout title={title} user={user}>
      <h1>Cards Page</h1>
      <FormFilter cities={cities}></FormFilter>
      <FormInput></FormInput>
      <div className="container">
        {cards.map((card) => (
          <Card card={card} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = CardsPage;
