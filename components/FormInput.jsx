const React = require('react');

function FormAddCard() {
  return (
    <form action='/' method='get'>
      <input type='text' placeholder='Название карточки' name='name' />
      <button type='submit'>Найти</button>
    </form>
  );
}

module.exports = FormAddCard;
