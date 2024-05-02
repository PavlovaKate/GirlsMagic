const router = require("express").Router();

const CardsPage = require("../../components/CardsPage");
const { Card, User, Condition } = require("../../db/models");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  try {
    const { user } = res.locals;
    const { city, name } = req.query;

    console.log(city);
    let cards;
    if (city === "all" || !city) {
      cards = await Card.findAll({
        include: [{ model: User }, { model: Condition }],
      });

      res.app.locals.cities = cards;
    } else {
      cards = await Card.findAll({
        include: [{ model: User, where: { city } }, { model: Condition }],
      });
    }

    if (!name) {
      cards = await Card.findAll({
        include: [{ model: User }, { model: Condition }],
      });
    } else {
      cards = await Card.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: [{ model: User }, { model: Condition }],
      });
    }

    console.log();

    const { cities } = res.app.locals.cities;

    res.send(
      res.renderComponent(CardsPage, {
        cards,
        user,
        cities,
        title: "Card Page",
      })
    );
  } catch ({ message }) {
    res.status(500).json("Ошибочка");
  }
});

module.exports = router;
