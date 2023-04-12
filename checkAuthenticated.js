function checkAuthenticated(req, res, next) {
  if (req.session.authenticated == true) {
    next();
  } else {
    res.redirect('/login');
  }
}

module.exports = checkAuthenticated;
