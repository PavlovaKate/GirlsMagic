const router = require('express').Router();
const FormAddCard = require('../../components/FormAddCard');
const { Condition } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const cond = await Condition.findAll();
    res.send(
      res.renderComponent(FormAddCard, { user, title: 'Личный кабинет', cond })
    );
  } catch ({ message }) {
    res.status(500).json('Ошибочка c формой ввода');
  }
});

module.exports = router;
