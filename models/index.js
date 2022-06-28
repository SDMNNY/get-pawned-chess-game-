const User = require("./User");
const Game = require("./Game");
const Comment = require("./Comments");

User.hasMany(Comment,{
    foreignKey:"commentId",
    onDelete:"CASCADE"
})
Comment.belongsTo(User,{
    foreignKey:"userId",
    onDelete:"CASCADE"
})
module.exports = { User, Game, Comment };
