const router = require('express').Router();
const { Move, Game, User} = require('../models');
// custom middleware 
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
  res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => { 
//   try { 
//     const moveData = await Move.findAll({
//       include: [ 
//         {
//           model: User,
//           attributes: { exclude: ['password'] },
//         },
//         {
//           model: Game,
//         },
//       ],
//     });
//     const moves = moveData.map((move) =>
//     moves.get({ plain: true })
//     );
//     res.render('homepage');
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.get('/game/:id', async (req, res) => {
  try { 
    const moveData = await Move.findByPk(req.params.id, {
      include : [
        {
          model: User,
          attributes: { exclude: ['password'] }
        },
        {
          model: Game,
        }
      ],
    });
    const singleMove = modeData.get( { plain: true }); 
    res.render('singleMove', {
      singleMove,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/challengepage', async (req, res) => {
  const allUsers = await User.findAll()
  const users = allUsers.map((user) =>
  user.get({ plain: true }))
  res.render('challengepage', {
    users
  });
});

module.exports = router;



