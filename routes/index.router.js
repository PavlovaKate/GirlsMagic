const router = require('express').Router();


const cardRouter = require('./card.router');

router.use('/cards', cardRouter);

module.exports = router
