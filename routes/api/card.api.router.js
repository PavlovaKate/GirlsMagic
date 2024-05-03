const router = require('express').Router();

const { Card } = require('../../db/models');

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

router.put('/update/:cardId/upd', async (req, res) => {
  try {
    const { cardId } = req.params;
    const { name, image, price, condition } = req.body;

    const result = await Card.update(
      { name, image, price, condition },
      { where: { id: cardId } }
    );

    if (result[0] > 0) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
