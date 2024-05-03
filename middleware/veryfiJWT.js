const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwtConfig");
const generateTokens = require("../utils/authUtils");

function verifyRefreshToken(req, res, next) {
  try {
    // if access token expired we checked refresh token
    const { refresh } = req.cookies;
    // check if user with such refresh token exist/refresh token right
    const { user } = jwt.verify(refresh, "R");
    // generate new tokens for user
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, email: user.email, name: user.name },
    });

    // add user to local
    res.locals.user = user;
    // add tokens to cookes
    res
      //                  refresh        token
      .cookie(jwtConfig.refresh.type, refreshToken, {
        // 12 часов
        maxAge: jwtConfig.refresh.expiresIn,
        httpOnly: true,
      })
      .cookie(jwtConfig.access.type, accessToken, {
        maxAge: jwtConfig.access.expiresIn,
        httpOnly: true,
      });
    next();
  } catch (error) {
    res.clearCookie(jwtConfig.refresh.type).clearCookie(jwtConfig.access.type);
    next();
  }
}

// verification of access token(which for 5 min generate)
function verifyAccessToken(req, res, next) {
  try {
    const { access } = req.cookies;
    const { user } = jwt.verify(access, "A");

    res.locals.user = user;
    next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
}

module.exports = verifyAccessToken;
