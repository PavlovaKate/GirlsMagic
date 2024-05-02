const React = require('react');
const Layout = require('./Layout')

function FormAddCard({title,cond}) {
    return (
        <Layout title={title}>
            {/* // прописываем метод */}
            <form action='/cards' method='post'>
                <input type='text' placeholder='name' name='name' />
                <input type='text' placeholder='image' name='image' />
                <input type='text' placeholder='price' name='price' />
                <select>
                  {cond.map(el =>{
                    return <option>{el.name}</option>;
                  })}
                    
                </select>

                <button>Add</button>
            </form>
        </Layout>
    );
}

module.exports = FormAddCard;
