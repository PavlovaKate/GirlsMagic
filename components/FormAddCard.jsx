const React = require('react');

function FormAddCard() {
    return (
        // прописываем метод
        <form action='/cards' method='post'>
            <input type='text' placeholder='name' name='name' />
            <input type='text' placeholder='image' name='image' />
            <input type='text' placeholder='price' name='price' />
            <button>Add</button>
        </form>
    );
}

module.exports = FormAddCard;
