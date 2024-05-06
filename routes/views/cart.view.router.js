const router = require('express').Router();
const CartPage = require('../../components/CartPage');
const { User, Card, Condition, Cart, OrderLine } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;

    const cart = await Cart.findOne({ where: { userId: user.id } });

    const order = await OrderLine.findAll({
      where: { cartId: cart.id },
      include: [
        { model: Card, include: [{ model: User }, { model: Condition }] },
      ],
    });
    const cards = order.map(({ Card }) => Card);
    // res.send('+++');
    res.send(
      res.renderComponent(CartPage, { user, cards, title: 'Наша корзина' })
    );
  } catch ({ message }) {
    console.log(message);
    res.status(500).json('Ошибочка c формой ввода');
  }
});

module.exports = router;
