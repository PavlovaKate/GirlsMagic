const router = require('express').Router();

// view
const authViewApiRouter = require('./views/auth.view.router');
const formViewRouter = require('./views/formadd.view.router');
const cardViewRouter = require('./views/card.view.router');
const cartViewRouter = require('./views/cart.view.router');

// api
const authApiRouter = require('./api/auth.api.router');
const formApiAddRouter = require('./api/formadd.api.router');
const cardApiRouter = require('./api/card.api.router');
const cartApiouter = require('./api/cart.api.router');

router.use('/', cardViewRouter);
router.use('/auth', authViewApiRouter);
router.use('/formAdd', formViewRouter);
router.use('/cart', cartViewRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/cards', cardApiRouter);
router.use('/api/formAdd', formApiAddRouter);
router.use('/api/addCart/', cartApiouter);

module.exports = router;
