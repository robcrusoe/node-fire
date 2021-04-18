const path = require("path");

const express = require("express");
const router = express();

const users = [];

router.get('/add-user', (req, res, next) => {
    res.status(200).render('add-user', { path: 'add-user', pageTitle: 'Add New User', userCSS: true });
});

router.post('/add-user', (req, res, next) => {
    console.log("req.body: ", req.body);
    users.push({ name: req.body.username });

    console.log("users: ", users);
    res.status(302).redirect('/');
});

module.exports = {
    routes: router,
    users: users
};