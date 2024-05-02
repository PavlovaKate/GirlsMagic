const router = require("express").Router();

const MainPage = require("../../components/MainPage");

router.get("/", (req, res) => {
  try {
    const { user } = res.locals;
    res.send(res.renderComponent(MainPage, { user, title: "Main page" }));
  } catch ({ message }) {
    res.status(500).json("Ошибочка");
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("access").clearCookie("refresh").redirect("/");
});

module.exports = router;
