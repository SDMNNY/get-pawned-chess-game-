const User = require('./User');
const Move = require('./Move');
const Game = require('./Game');

Game.hasMany(Move, {
    foreignKey: 'game_id',
  });

Move.belongsTo(Game, {
    foreignKey: 'game_id',
});



module.exports = { User, Move, Game };