const router = require('express').Router();
const { Card } = require('../../db/models');
const CardItem = require('../../components/CardItem');
const multer = require('multer');

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
    const { user } = res.locals;
    const { name, price, condition, discription } = req.body;

    const newFileUrl = `/img/${req.file.originalname}`;

    const newCard = await Card.create({
      name,
      image: newFileUrl,
      price,
      discription,
      conditionId: condition,
      userId: user.id,
    });

    if (newCard) {
      res.status(201).json({ message: 'success' });
      return;
    }
    res.json(400).json('Что-то пошло не так');
  } catch ({ message }) {
    console.log(message);
    res.status(500).json('Ошибочка c добавлением картинки');
  }
});

module.exports = router;
