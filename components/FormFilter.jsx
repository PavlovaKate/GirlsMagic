const React = require("react");

function FormFilter({ cities }) {
  return (
    <form action="/cards" method="get">
      <select name="city">
        <option value="all" selected>
          All
        </option>
        {cities.map((card) => (
          <option value={card.User.city}>{card.User.city}</option>
        ))}
      </select>
      <button type="submit">найти</button>
    </form>
  );
}

module.exports = FormFilter;
