const router = require('express').Router()
const notFound = require('../../components/NotFound')

 
router.get('*',(req,res)=>{
  res.send(res.renderComponent(notFound));
})





module.exports = router
