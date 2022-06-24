const sequelize = require('../config/connection');
const { User, Move, Game } = require('../models');

const userData = require('./userData.json');
const moveData = require("./moveData.json");
const gameData = require("./gameData.json");



const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    await Move.bulkCreate(moveData, {
      individualHooks: true,
      returning: true,
    });

    await Game.bulkCreate(gameData, {
      individualHooks: true,
      returning: true,
    });
    
    
    process.exit(0);
  };
  
  seedDatabase();