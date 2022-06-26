const User = require("./User");
const Move = require("./Move");
const Game = require("./Game");
const View = require("./View")

Game.hasMany(Move, {
  foreignKey: "move_id",
});

Move.belongsTo(Game, {
  foreignKey: "move_id",
});

Game.hasMany(User, {
  foreignKey: "user_id",
});

User.belongsTo(Game, {
  foreignKey: "user_id",
});

module.exports = { User, Move, Game, View };
