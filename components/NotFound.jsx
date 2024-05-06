const React = require('react');

function notFound() {
    return (
        <h1>
            <link rel='stylesheet' href='/styles/style.css' />
            <img
                className='cat'
                src='https://media.tenor.com/HFHx4OnbeoMAAAAi/sp-404.gif'
            ></img>
        </h1>
    );
}

module.exports = notFound;
