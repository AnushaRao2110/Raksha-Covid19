const User = require("../models/user");

//bringing on express-validator for checking
const { check, validationResult } = require("express-validator");

var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  //validationResult binds errors with req
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      param: errors.array()[0].param,
    });
  }
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.status(400).json({ err: "Email already registered" });
      } else {
        const user = new User(req.body);
        user.save((err, user) => {
          if (err) {
            return res.status(400).json({
              err: "Not able to save user in DB",
            });
          }
          res.json({
            name: user.name,
            email: user.email,
            id: user._id,
          });
        });
      }
    })
    .catch(err => console.log("Error" + JSON.stringify(err, undefined, 2)));
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      param: errors.array()[0].param,
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User email does not exists",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and Password Do not match",
      });
    }

    //create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    //put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    //Send response to frontend
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, name, email, role } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout successfully",
  });
};

//Protected Routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
});

//Custom Middlewares
exports.isAuthenticated = (req, res, next) => {
  //profile will be set from frontend only when the user is logged in and auth is the bearer authentication
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  //Using Roles
  if (req.profile.role === 0 || req.profile.role === 1) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};

exports.isSupplier = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  } else {
    next();
  }
};

exports.isHospital = (req, res, next) => {
  if (req.profile.role === 1) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  } else {
    next();
  }
};
