const {View} = require('../models');

const viewdata = [
  {
    title: 'Robert Fischer VS Ratmir Kholmov',
  },
  {
    title: 'Robert Fischer VS Boris Spassky',
  },
  {
    title: 'Bernard Bisguier VS Robert Fischer',
  },

];

const seedView = () => View.bulkCreate(viewdata);

module.exports = seedView;
