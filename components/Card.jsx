const React = require("react");

function cardCard({ card, user }) {
  return (
    <div className="cardCard" data-cardId={card.id}>
      <div className="cardImg">
        <img src={card.image} alt="cardImage" />
      </div>
      <div className="cardCardContent">
        <h2>{card.name}</h2>
        <p>{card.price}</p>
        <p>{card.Condition.name}</p>
        <p>{card.User.city}</p>
        <a href={`/cards/${card.id}`}>More</a>
        <div className="cardCardActions">
          {user && user.id === card.userId && (
            <>
              <button type="button" className="btn-delete">
                Delete
              </button>
              <button type="button">
                <a href={`/cards/update/${card.id}`}>Update</a>
              </button>
            </>
          )}
          {user && <button type="button">Add to cart</button>}
        </div>
      </div>
    </div>
  );
}

module.exports = cardCard;
