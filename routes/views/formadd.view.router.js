
const router = require('express').Router();
const FormAddCard = require('../../components/FormAddCard');

router.get('/', async(req,res) =>{
  try {
res.send(res.renderComponent(FormAddCard,{title: 'Form Add'}))


  } catch ({ message }) {
      res.status(500).json('Ошибочка c формой ввода');
  }
})






module.exports = router;
