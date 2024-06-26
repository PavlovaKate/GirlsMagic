const React = require('react');
const Layout = require('./Layout');

function FormUpdateCard({ title, user, card }) {
  return (
    <Layout title={title} user={user}>
      <form
        action='/api/cards'
        method='post'
        className='FormUpdateCard'
        data-cardid={card.id}
      >
        <input type='text' placeholder='name' name='name' value={card.name} />
        <input
          type='file'
          multiple
          placeholder='image'
          name='image'
          value={card.image}
        />
        <input
          type='text'
          placeholder='discription'
          name='discription'
          value={card.discription}
        />
        <input
          type='text'
          placeholder='price'
          name='price'
          value={card.price}
        />
        <input
          type='text'
          placeholder='condition'
          name='condition'
          value={card.Condition.name}
        ></input>

        <button type='submit'>Изменить</button>
      </form>
    </Layout>
  );
}

module.exports = FormUpdateCard;
