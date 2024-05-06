const React = require('react');
const Layout = require('./Layout');
const CartItem = require('./CartItem');

function CartPage({ title, user, cards }) {
  return (
    <Layout title={title} user={user}>
      <h1>Корзина</h1>
      <div className='container'>
        {cards.map((card) => (
          <CartItem card={card} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = CartPage;
