'use strict';
module.exports = function(sequelize, DataTypes) {
  var joke = sequelize.define('joke', {
    setup: DataTypes.STRING,
    punchline: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return joke;
};
