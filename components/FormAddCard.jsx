const React = require('react');
const Layout = require('./Layout')

function FormAddCard({title,cond}) {
    return (
        <Layout title={title}>
            {/* // прописываем метод */}
            <form action='/api/formAdd' method='post' className='FormAddCard'>
                <input type='text' placeholder='name' name='name' />
                <input type='file' multiple placeholder='image' name='image' />
                <input type='text' placeholder='price' name='price' />
                <select name='condition'>
                    {cond.map(el => {
                        return <option value={el.id}>{el.name}</option>;
                    })}
                </select>

                <button type='submit'>Add</button>
            </form>
        </Layout>
    );
}

module.exports = FormAddCard;
