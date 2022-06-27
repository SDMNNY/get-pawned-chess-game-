const User = require("./User");
const Game = require("./Game");
const Comment = require("./Comments");

Game.hasMany(User, {
  foreignKey: "user_id",
});

User.belongsTo(Game, {
  foreignKey: "user_id",
});

module.exports = { User, Game, Comment };
