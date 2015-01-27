var addCommas = require('add-commas'),
  isNumber = require('is-number');

module.exports.register = function (Handlebars, options, param) {

  Handlebars.registerHelper('addCommas', function (num) {

    return (isNumber(num)) ? addCommas(num) : num;
  });
};
