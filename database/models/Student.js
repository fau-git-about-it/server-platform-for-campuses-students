const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('student', {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      'https://louisville.edu/enrollmentmanagement/images/person-icon/image',
  },

  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Student;
