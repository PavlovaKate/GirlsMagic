const router = require('express').Router();
// const PostCard = require('../components/PostCard');
// const PostsPage = require('../components/PostsPage');
const { Card } = require('../../db/models');
const CardItem = require('../../components/Card')
// const PostPage = require('../components/PostPage');
const multer = require('multer');


// router.post('/', async (req, res) => {
//     try {
//       // с помощью диструкторизации достаем необходимые параметры
//       const { name, image, price,condition } = req.body;
//       console.log(req.body);
//         const cards = await Card.create({
//             name,
//             image,
//             price,
//             condition,
//             userId: res.locals.user.id
//         });

//         const card = res.renderComponent(Card, { card }, { doctype: false });

//         res.send(card);
//     } catch ({ message }) {
//         res.status(500).json('Ошибочка');
//     }
// });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });


router.post('/', upload.single('image'), async (req, res) => {
    try {
        // const { id } = res.locals.user;
        const { name, price, condition } = req.body;
console.log(name, price, condition);
        const newFileUrl = `/img/${req.file.originalname}`;

        const card = await Card.create({
            name,
            image: newFileUrl,
            price,
            conditionId:condition,
            userId: 5
        });
        console.log(card);
        const html = res.renderComponent(
            CardItem,
            { card },
            { doctype: false }
        );
        if (card) {
            res.status(201).json({ message: 'success', html });
            return;
        }
        res.json(400).json('Что-то пошло не так');
    } catch ({ message }) {
      console.log(message);
        res.status(500).json('Ошибочка c добавлением картинки');
    }
});




module.exports = router;
