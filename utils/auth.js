const withAuth = (req, res, next) => {
    if (req.session.loggedIn = false){
      res.redirect('/login')
    }
    else {
      next();
    }
  };
  
  module.exports = withAuth;
  