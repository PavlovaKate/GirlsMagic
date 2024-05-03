const router = require('express').Router();
const multer = require('multer');

const { Card, Condition } = require('../../db/models');

router.delete('/:cardId/upd', async (req, res) => {
  try {
    const { cardId } = req.params;

    const result = await Card.destroy({ where: { id: cardId } });

    if (result > 0) {
      res.status(200).json({ message: 'success' });
      return;
    }

    res.status(400).json({ message: 'Не твоя, вот и бесишься' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.put('/update/:cardId/upd', upload.single('image'), async (req, res) => {
  try {
    const { user } = res.locals;
    const { cardId } = req.params;
    const { name, price, condition, discription } = req.body;
    console.log(name, price, condition, discription);
    const newFileUrl = `/img/${req.file.originalname}`;
    const conditionInDb = await Condition.findOne({
      where: { name: condition },
    });
    console.log(newFileUrl);
    console.log(conditionInDb);

    const result = await Card.update(
      {
        name,
        image: newFileUrl,
        price,
        discription,
        conditionId: conditionInDb.id,
        userId: user.id,
      },
      { where: { id: cardId } }
    );
    console.log(result);
    if (result[0] > 0) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ error: message });
  }
});

module.exports = router;
