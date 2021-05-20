// register models, set up associations between tables, and generate barrel file for the models;

const Student = require('./Student.js');
const Campus = require('./Campus.js');

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  Student,
  Campus,
};
