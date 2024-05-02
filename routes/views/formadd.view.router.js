
const router = require('express').Router();
const FormAddCard = require('../../components/FormAddCard');
const {Condition} = require('../../db/models')

router.get('/', async(req,res) =>{
  try {
    console.log(Condition);
    const cond = await Condition.findAll()
    console.log(cond);
res.send(res.renderComponent(FormAddCard,{title: 'Form Add',cond}))


  } catch ({ message }) {
      res.status(500).json('Ошибочка c формой ввода');
  }
})






module.exports = router;
