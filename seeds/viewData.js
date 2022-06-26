const {View} = require('../models');

const viewdata = [
  {
    title: 'Robert Fischer VS Ratmir Kholmov',
  },
  {
    title: 'Robert Fischer VS Ratmir Kholmov',
  },
];

const seedView = () => View.bulkCreate(viewdata);

module.exports = seedView;
