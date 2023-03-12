const express = require('express');
const router = require("express").Router();
const { BlogPost, Comment, User } = require("../models");
//ADD THIS
const withAuth = require("../utils/auth");

//basic home route
router.get('/', async (req, res) => {
    try {
        res.render('homepage', { logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
})

//login route
router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).jason(err)
    }
})

module.exports = router;