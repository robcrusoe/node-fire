/* Core Module Imports */
const path = require('path');

/* 3rd Party Imports */
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

/* Import Routes */
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

/* Import for express-handlebars */
const expressHbs = require('express-handlebars');

const app = express();

/* Registering our (req) body-parser */
app.use(bodyParser.urlencoded({ extended: false }));

/* Registering our public folder to serve static content/files */
app.use(express.static(path.join(__dirname, 'public')));

/* Registering our favicon */
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/* Registering the express-handlebars templating engine */
app.engine('hbs', expressHbs({ layoutsDir: 'views/layout', defaultLayout: 'main', extname: 'hbs' }));

/* Setting up the global configuration values */
app.set('view engine', 'hbs');
app.set('views', 'views');

/* Registering MWs for routes */
app.use(userRoutes.routes);
app.use(adminRoutes.routes);

app.use((req, res, next) => {
  res.status(404).render('index', { pageTitle: 'Node | Fire --- Welcome!', path: null });
});

app.listen(3000);
console.log(`Server running on port 3000 ...`);
