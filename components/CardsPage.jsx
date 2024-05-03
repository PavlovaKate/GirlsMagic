const React = require('react');
const Layout = require('./Layout');
const CardItem = require('./CardItem');
const FormFilter = require('./FormFilter');
const FormInput = require('./FormInput');
// const FormAddcard = require('./FormAddcard');

function CardsPage({ title, cards, user, cities }) {
  return (
    <Layout title={title} user={user}>
      <h1>Выбери своего героя</h1>
      <div className='cardFilter'>
        <FormFilter cities={cities}></FormFilter>
        <FormInput></FormInput>
      </div>

      <div className='container'>
        {cards.map((card) => (
          <CardItem card={card} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = CardsPage;
