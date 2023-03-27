const sequelize = require("../config/connection");
const { BlogPost, Comment, User } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");
const commentData = require("./commentData.json");

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    //seed all user data
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const posts = await BlogPost.bulkCreate(postData, {
        returning: true
    });


    const comments = await Comment.bulkCreate(commentData, {
        returning: true
    });

    process.exit(0);
};

seedDatabase();