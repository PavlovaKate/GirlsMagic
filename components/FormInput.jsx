const React = require("react");

function FormAddCard() {
  return (
    <form action="/cards" method="get">
      <input type="text" placeholder="name" name="name" />
      <button type="submit">Add</button>
    </form>
  );
}

module.exports = FormAddCard;
