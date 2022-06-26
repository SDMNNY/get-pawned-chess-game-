const router = require("express").Router();
const session = require("connect-session-sequelize");
const { Move, Game, User } = require("../models");
// custom middleware
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    console.log(req.session);
    res.render("homepage");
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

router.get("/game/:id", async (req, res) => {
  try {
    const moveData = await Move.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
        {
          model: Game,
        },
      ],
    });
    const singleMove = moveData.get({ plain: true });
    res.render("singleMove", {
      singleMove,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get('/games/:id', async (req, res) => {
//   try {
//     const gameData = await Game.findByPk(req.params.id, {
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

//     const singleGame = gameData.get({ plain: true });

//     res.render('singleGame', {
//       singleGame,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/challengepage", withAuth, async (req, res) => {
  const allUsers = await User.findAll();
  const users = allUsers.map((user) => user.get({ plain: true }));
  if (!req.session.loggedIn) {
    res.redirect("login", {
      users,
    });
    return;
  }
  res.render("challengepage", {
    users,
    loggedIn: req.session.loggedIn,
  });
});


module.exports = router;

// // Get All
// router.get('/', withAuth, async (req, res) => {

//     try {
//       const userData = await User.findAll({
//         attributes: { exclude: ['password'] },
//         order: [['name',]],
//       });

//       const users = userData.map((user) => user.get({ plain: true }));

//       res.render('homepage', {
//         users,
//         logged_in: req.session.logged_in,
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

router.get("/logout", (req, res) => {
  res.render("logout");
});

router.get("/login", (req, res) => {
  console.log(req.session);
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});
// // Get one
// router.get('/user/:id', async (req, res) => {
//   if (!req.session.loggedIn) {
//     res.redirect('/login');
//   } else {
//     try {
//       const userData = await User.findByPk(req.params.id, {
//         include : [
//           {
//             model: User,
//             attributes: [
//               "username",
//               "email",
//               "password",
//             ],
//           },
//         ],

//       });
//       const user = userData.get({ plain: true });
//       res.render('user', {user, loggedIn: req.session.loggedIn});
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }

// });

// router.get("/login", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
// });

// module.exports = router;
