const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  description: {
    type: Sequelize.TEXT,
  },

  address: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      'https://thumbs.dreamstime.com/b/watercolor-yellow-cartoon-university-building-surrounded-landscape-tree-bushes-grass-street-lamp-sky-isolated-white-143636458.jpg',
  },
});

module.exports = Campus;
