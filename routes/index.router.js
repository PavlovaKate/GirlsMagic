const router = require('express').Router();

const cardRouter = require('./views/card.view.router');

// view
const mainViewRouter = require('../routes/views/main.view.router');
const authViewApiRouter = require('../routes/views/auth.view.router');
const formViewRouter = require('../routes/views/formadd.view.router')

// api
const authApiRouter = require('./api/auth.api.router');
const formAdd = require('./api/formadd.api.router');

router.use('/auth', authViewApiRouter);
router.use('/', mainViewRouter);
router.use('/api/auth', authApiRouter);
router.use('/cards', cardRouter);
router.use('/api/formAdd', formAdd);
router.use('/formAdd', formViewRouter);

module.exports = router;
