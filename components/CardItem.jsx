const React = require('react');

function CardItem({ card, user }) {
  return (
    <div className='cardCard' data-cardId={card.id}>
      <div className='cardImg'>
        <img src={card.image} alt='cardImage' />
      </div>
      <div className='cardCardContent'>
        <div className='cardText'>
          <h2>{card.name}</h2>
          <p>Цена: {card.price} $</p>
          <p>Состояние: {card.Condition.name}</p>
          <p>Город: {card.User.city}</p>
          <p>Описание: {card.discription}</p>
        </div>

        <div className='cardCardActions'>
          {user && user.id === card.userId && (
            <>
              <button type='button' className='btn-delete'>
                Delete
              </button>
              <button type='button'>
                <a href={`/update/${card.id}/upd`}>Update</a>
              </button>
            </>
          )}
          {user && (
            <button type='button' className='add-to-cart'>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

module.exports = CardItem;
