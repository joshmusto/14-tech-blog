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

    for (const post of postData) {
        await BlogPost.create({
            //blog post data as usual
            ...post,
            //but when it comes to user_id, randomize it
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    };

    for (const comment of commentData) {
        await Comment.create({
            ...comment,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    };

    process.exit(0);
};

seedDatabase();