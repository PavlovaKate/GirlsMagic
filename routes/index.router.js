const router = require("express").Router();

// view
const mainViewRouter = require("./views/main.view.router");
const authViewApiRouter = require("./views/auth.view.router");
const cardViewRouter = require("./views/card.view.router");

// api
const authApiRouter = require("./api/auth.api.router");

router.use("/", mainViewRouter);
router.use("/auth", authViewApiRouter);
router.use("/api/auth", authApiRouter);
router.use("/cards", cardViewRouter);

module.exports = router;
