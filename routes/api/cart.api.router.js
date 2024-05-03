const router = require('express').Router();
const { Cart, OrderLine } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { user } = res.locals;
    let cart;
    const { cardId } = req.body;
    cart = await Cart.findOne({ where: { userId: user.id } });

    if (!cart) {
      cart = await Cart.create({
        userId: user.id,
      });
    }

    const newOrder = await OrderLine.create({
      cartId: cart.id,
      cardId,
    });

    res.status(201).json({ message: 'success' });

    // res.status(400).json({ message: 'Не твоя, вот и бесишься' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
