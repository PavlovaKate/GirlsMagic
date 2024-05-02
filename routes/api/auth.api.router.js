const bcrypt = require("bcrypt");
const router = require("express").Router();
const { User } = require("../../db/models");
const jwtConfig = require("../../config/jwtConfig");
const generateTokens = require("../../utils/authUtils");

router.post("/registration", async (req, res) => {
  try {
    const { name, email, password, city } = req.body;
    let userInDb;

    userInDb = await User.findOne({ where: { email } });

    if (userInDb) {
      res.status(400).json("Друг, такой email уже зареган");
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);

    userInDb = await User.create({
      name,
      email,
      city,
      password: hashPassword,
      city,
    });

    const user = await User.findOne({
      where: { id: userInDb.id },
      attributes: ["id", "name", "email"],
    });

    if (user) {
      const { accessToken, refreshToken } = generateTokens({ user });
      res.locals.user = user;

      res
        .cookie("access", accessToken, {
          maxAge: jwtConfig.access.expiresIn,
          httpOnly: true,
        })
        .cookie("refresh", refreshToken, {
          maxAge: jwtConfig.refresh.expiresIn,
          httpOnly: true,
        })
        .status(201)
        .json({ message: "success" });
    }
  } catch ({ message }) {
    res.status(500).json("Ошибка");
  }
});

router.post("/authorization", async (req, res) => {
  try {
    const { email, password } = req.body;

    const userInDb = await User.findOne({ where: { email } });

    const isDone = await bcrypt.compare(password, userInDb.password);

    if (isDone) {
      const user = await User.findOne({
        where: { id: userInDb.id },
        attributes: ["id", "name", "email"],
      });

      if (user) {
        const { accessToken, refreshToken } = generateTokens({ user });
        res.locals.user = user;
        res
          .cookie("access", accessToken, {
            maxAge: jwtConfig.access.expiresIn,
            httpOnly: true,
          })
          .cookie("refresh", refreshToken, {
            maxAge: jwtConfig.refresh.expiresIn,
            httpOnly: true,
          })
          .status(201)
          .json({ message: "success" });
      }
    }
    // важно прописать недуачные попытки
  } catch ({ message }) {
    res.status(500).json("Ошибка");
  }
});

module.exports = router;
