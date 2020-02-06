const { connection, JWTSecret } = require("./conf");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (email, password, done) => {
      connection.query(
        "SELECT * FROM user WHERE email = ? LIMIT 1",
        [email],
        (err, user) => {
          if (!user.length)
            return done(null, false, { message: "Utilisateur inexistant." });
          if (err) return done(err);
          const isPasswordOk = bcrypt.compareSync(password, user[0].password);
          if (!isPasswordOk)
            return done(null, false, { message: "Mot de passe inexistant." });
          return done(null, user);
        }
      );
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWTSecret
    },
    (jwtPayload, done) => {
      return done(null, jwtPayload);
    }
  )
);
