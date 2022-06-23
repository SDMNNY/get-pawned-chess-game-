const router = require('express').Router();
const { Game, User } = require('../models');
// custom middleware 
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
      // const userData = await User.findAll({
      //   attributes: { exclude: ['password'] },
      //   order: [['name',]],
      // });
  
      // const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('homepage', {
        // users,
        // logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login',(req,res)=>{res.render("login")})
router.get('/logout',(req,res)=>{res.render("logout")})















module.exports = router;
