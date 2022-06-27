const router = require("express").Router();
const session = require("connect-session-sequelize");
const { Move, Game, User } = require("../models");
// custom middleware
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll({});
    const users = allUsers.map((user) => user.get({ plain: true }));
    res.render("homepage", {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

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

router.get("/challengepage", withAuth, async (req, res) => {
  try {
    const allUsers = await User.findAll();
    const users = allUsers.map((user) => user.get({ plain: true }));
    res.render("challengepage", {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/challengepage/game-1", withAuth, async (req, res) => {
  try {
    const allUsers = await User.findAll();
    const users = allUsers.map((user) => user.get({ plain: true }));
    res.render("game-1", {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/challengepage/game-2", withAuth, async (req, res) => {
  try {
    const allUsers = await User.findAll();
    const users = allUsers.map((user) => user.get({ plain: true }));
    res.render("game-2", {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/challengepage/game-3", withAuth, async (req, res) => {
  try {
    const allUsers = await User.findAll();
    const users = allUsers.map((user) => user.get({ plain: true }));
    res.render("game-3", {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/challengepage/game-4", withAuth, async (req, res) => {
  try {
    const allUsers = await User.findAll();
    const users = allUsers.map((user) => user.get({ plain: true }));
    res.render("game-4", {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;

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
