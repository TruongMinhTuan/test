'use strict';

module.exports.CountryEnum = {
  PL: 'PL',
  UNKNOWN: 'UNKNOWN',

  getCountry: function (country) {

    if (!this.hasOwnProperty(country)) {
      return null;
    }

    return module.exports.CountryEnum[country];
  }
};
