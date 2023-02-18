//import classes
const User = require('./User.js');
const BlogPost = require('./BlogPost.js');
const Comment = require('./Comment.js');

//connections between user and posts/comments
User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

//export everything for use
module.exports = { User, BlogPost, Comment };