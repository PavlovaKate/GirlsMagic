const router = require('express').Router();

const CardsPage = require('../../components/CardsPage');
const FormUpdateCard = require('../../components/FormUpdateCard');
const { Card, User, Condition } = require('../../db/models');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const { city, name } = req.query;

    let cards;
    if ((city === 'all' || !city) && !name) {
      cards = await Card.findAll({
        include: [{ model: User }, { model: Condition }],
      });
      const citiesAll = (
        await Card.findAll({
          include: [
            { model: User, attributes: ['city'] },
            { model: Condition },
          ],
        })
      ).map(({ User }) => User.city);
      const uniqCities = new Set(citiesAll);
      const cities = [...uniqCities];
      res.app.locals.cities = cities;
    } else if (city === 'all' || !city) {
      cards = await Card.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: [{ model: User }, { model: Condition }],
      });
    } else if (!name) {
      cards = await Card.findAll({
        include: [{ model: User, where: { city } }, { model: Condition }],
      });
    } else {
      cards = await Card.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: [{ model: User, where: { city } }, { model: Condition }],
      });
    }

    const { cities } = res.app.locals.cities;

    res.send(
      res.renderComponent(CardsPage, {
        cards,
        user,
        cities,
        title: 'Card Page',
      })
    );
  } catch ({ message }) {
    res.status(500).json('Ошибочка');
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('access').clearCookie('refresh').redirect('/');
});

router.get('/update/:cardId/upd', async (req, res) => {
  try {
    const { user } = res.locals;
    const { cardId } = req.params;
    const card = await Card.findOne({
      where: { id: cardId },
      include: { model: Condition },
    });
    res.status(200).send(
      res.renderComponent(FormUpdateCard, {
        card,
        user,
        title: 'update card info',
      })
    );
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
