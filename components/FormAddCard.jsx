const React = require('react');
const Layout = require('./Layout');

function FormAddCard({ title, cond, user }) {
  return (
    <Layout title={title} user={user}>
      <form action='/api/formAdd' method='post' className='FormAddCard'>
        <input type='text' placeholder='Название' name='name' required />
        <input type='text' placeholder='Описание' name='discription' required />
        <input type='file' multiple placeholder='image' name='image' required />
        <input type='text' placeholder='Цена' name='price' required />
        <select name='condition'>
          {cond.map((el) => {
            return <option value={el.id}>{el.name}</option>;
          })}
        </select>

        <button type='submit'>Add</button>
      </form>
    </Layout>
  );
}

module.exports = FormAddCard;
