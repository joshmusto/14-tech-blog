const router = require("express").Router();
const { BlogPost, Comment, User } = require("../models");
//ADD THIS
const withAuth = require("../utils/auth");

