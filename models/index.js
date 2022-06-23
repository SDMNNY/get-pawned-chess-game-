const User = require('./User');
const Game = require('./Game');

User.hasMany(Game, {
  foreignKey: 'gallery_id',
});

Game.belongsTo(User, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Painting };
