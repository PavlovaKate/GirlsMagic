const router = require('express').Router();
// const PostCard = require('../components/PostCard');
// const PostsPage = require('../components/PostsPage');
const { Card } = require('../../db/models');
// const PostPage = require('../components/PostPage');
const multer = require('multer');


router.post('/', async (req, res) => {
    try {
        // с помощью диструкторизации достаем необходимые параметры
        const { name, image, price } = req.body;
        const cards = await Card.create({
            name,
            image,
            price,
            userId: res.locals.user.id
        });

        const card = res.renderComponent(Card, { card }, { doctype: false });

        res.send(card);
    } catch ({ message }) {
        res.status(500).json('Ошибочка');
    }
});



module.exports = router;
