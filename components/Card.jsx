const React = require('react');

function cardCard({ card }) {
    return (
        // создаем в домдереве уникальный пост айди через data-attribute через нижний регистр
        <div className='cardCard' data-cardId={card.id}>
            <img src={card.image} alt='cardImage' />
            <div className='cardCardContent'>
                <h2>{card.name}</h2>
                <p>{card.price}</p>
                <a href={`/cards/${card.id}`}>More</a>
                <div className='cardCardActions'>
                    {/* зададим класснейм для кнопки */}
                    <button type='button' className='btn-delete'>
                        Delete
                    </button>
                    <button type='button'>
                        <a
                            style={{ color: 'white' }}
                            href={`/cards/update/${card.id}`}
                        >
                            Update
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

module.exports = cardCard;
