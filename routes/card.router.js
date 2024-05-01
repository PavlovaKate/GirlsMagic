const router = require('express').Router();

// const Card = require('../components/Card');
const CardsPage = require('../components/CardsPage');
// подтягиваем посты из бд
const { Card } = require('../db/models');

// const CardsPage = require('../components/PostPage');

router.get('/', async (req, res) => {
    try {
        const cards = await Card.findAll();
        res.send(
            res.renderComponent(CardsPage, { cards, title: 'Card Page' })
        );
    } catch ({ message }) {
        res.status(500).json('Ошибочка');
    }
});

// router.get('/:postId', async (req, res) => {
//     try {
//         // что написали в адресе запроса выше, то и достаем , то есть айди картинки
//         const { postId } = req.params;

//         const post = await Post.findOne({ where: { id: postId } });

//         const html = res.renderComponent(PostPage, {
//             post,
//             title: 'Post Page'
//         });
//         res.send(html);
//     } catch ({ message }) {
//         res.status(500).json('Ошибочка');
//     }
// });

router.post('/', async (req, res) => {
    try {
        // с помощью диструкторизации достаем необходимые параметры
        const { name, image, price } = req.body;
        const post = await Card.create({
            name,
            image,
            price,
            userId: 1
        });

        const card = res.renderComponent(
            Card,
            { card },
            { doctype: false }
        );

        res.send(card);
        
    } catch ({ message }) {
        res.status(500).json('Ошибочка');
    }
});

// router.delete('/:cardId', async (req, res) => {
//     try {
//         const { cardId } = req.params;

//         const result = await Card.destroy({ where: { id: cardId } });

//         if (result > 0) {
//             res.status(200).json({ message: 'success' });
//             return;
//         }
//         res.status(400).json({ message: 'Не твоя, вот ты и бесишься' });
//     } catch ({ message }) {
//         res.status(500).json({ error: message });
//     }
// });

module.exports = router;
