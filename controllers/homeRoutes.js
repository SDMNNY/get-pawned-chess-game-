const router = require('express').Router();
const { Move, User, Game } = require('../models');
// custom middleware 
const withAuth = require('../utils/auth');


// Get All
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get('/login',(req,res)=>{res.render("login")})
router.get('/logout',(req,res)=>{res.render("logout")})

// Get one 








router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});





module.exports = router;
