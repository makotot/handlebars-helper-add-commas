var expect = require('chai').expect,
  Handlebars = require('handlebars');

var addCommas = require('./');

addCommas.register(Handlebars, {});


describe('handlebars-helper-add-commas', function () {

    it('should return 100', function () {
      var compiled = Handlebars.compile('{{addCommas 100}}')();

      expect(compiled).to.equal('100');
    });

    it('should return 1,000', function () {
      var compiled = Handlebars.compile('{{addCommas 1000}}')();

      expect(compiled).to.equal('1,000');
    });

    it('should return 1,000,000', function () {
      var compiled = Handlebars.compile('{{addCommas 1000000}}')();

      expect(compiled).to.equal('1,000,000');
    });

    it('should not add commas if arg is not number', function () {
      var compiled = Handlebars.compile('{{addCommas "hello"}}')();

      expect(compiled).to.equal('hello');
    });

});
