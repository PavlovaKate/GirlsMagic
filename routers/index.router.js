const router = require("express").Router();

// view
const mainViewRouter = require("./views/main.view.router");
const authViewApiRouter = require("./views/auth.view.router");

// api
const authApiRouter = require("./api/auth.api.router");

router.use("/auth", authViewApiRouter);
router.use("/", mainViewRouter);
router.use("/api/auth", authApiRouter);

module.exports = router;
