const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Move extends Model {}

Move.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    piece: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    starting_position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    next_position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'game',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "move",
  }
);

module.exports = Move;
