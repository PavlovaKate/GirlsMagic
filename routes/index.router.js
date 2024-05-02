const router = require("express").Router();

// view
const mainViewRouter = require("./views/main.view.router");
const authViewApiRouter = require("./views/auth.view.router");
const formViewRouter = require("./views/formadd.view.router");
const cardRouter = require("./views/card.view.router");

// api
const authApiRouter = require("./api/auth.api.router");
const formAdd = require("./api/formadd.api.router");

router.use("/auth", authViewApiRouter);
router.use("/", mainViewRouter);
router.use("/api/auth", authApiRouter);
router.use("/cards", cardRouter);
router.use("/api/formAdd", formAdd);
router.use("/formAdd", formViewRouter);

module.exports = router;
