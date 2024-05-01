const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');
// const FormAddcard = require('./FormAddcard');

function CardsPage({ title, cards }) {
    return (
        <Layout title={title}>
            <h1>Cards Page</h1>
            
            <div className='container'>
                {cards.map(card => (
                    <Card card={card} />
                ))}
            </div>
        </Layout>
    );
}

module.exports = CardsPage;
