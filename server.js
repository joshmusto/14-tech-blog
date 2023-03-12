const path = require('path');
const express = require('express');
//know where to get controllers from
const routes = require('./controllers');
//sequelize dependencies
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//handlebars and custom helpers
const exphbs = require('express-handlebars');
const helpers = require('./utils/helper.js');
const hbs = exphbs.create({ helpers });

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

//express-session stuff
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUnititialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

//set express template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on Port ${PORT}`));
})