const router = require("express").Router();

const cardRouter = require("./card.router");

// view
const mainViewRouter = require("../routes/views/main.view.router");
const authViewApiRouter = require("../routes/views/auth.view.router");

// api
const authApiRouter = require("./api/auth.api.router");

router.use("/auth", authViewApiRouter);
router.use("/", mainViewRouter);
router.use("/api/auth", authApiRouter);
router.use("/cards", cardRouter);

module.exports = router;
