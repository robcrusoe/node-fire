const path = require("path");

const express = require("express");
const router = express();

const usersData = require('./user');

router.get('/admin', (req, res, next) => {
    console.log('usersData: ', usersData);

    return res.status(200).render('admin', { path: '/admin', pageTitle: 'Dashboard', users: usersData.users, hasUsers: usersData.users.length > 0 });
});

module.exports = {
    routes: router
};