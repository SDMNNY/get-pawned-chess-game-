const sequelize = require('../config/connection');
const { User,Move } = require('../models');
const userData = require('./userData.json');
const moveData = require("./moveData.json");



const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    
    await Move.bulkCreate(moveData);
    
    process.exit(0);
  };
  
  seedDatabase();