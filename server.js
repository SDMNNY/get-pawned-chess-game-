// DEPENDENCIES
const path = require('path');
const fetch = require('node-fetch');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require("./controllers")
const hbs = exphbs.create({});

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// APP SETUP
const app = express();
const PORT = process.env.PORT || 3001;




//VIEWS SETUP
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

const sess = {
  //TODO: Change secret to .env
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


// fetch("https://api.thenewsapi.com/v1/news/all?")
.then ((res) => res.json())
.then ((res) => console.log (res));


app.use(session(sess));

//ROUTES SETUP
app.use(routes)
// app.get("/login", async (req,res) => {

//     res.render("login",{})
// })



//LISTENER
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  
