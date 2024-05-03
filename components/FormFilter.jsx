const React = require('react');

function FormFilter({ cities }) {
  return (
    <form action='/' method='get'>
      <select name='city'>
        <option value='all' selected>
          All
        </option>
        {cities.map((city) => (
          <option value={city}>{city}</option>
        ))}
      </select>
      <button type='submit'>найти</button>
    </form>
  );
}

module.exports = FormFilter;
