const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controllers');



const app = express();
const PORT = process.env.PORT || 3001;



const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get("/", async (req,res) => {

    res.render("homepage",{})
})




sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  