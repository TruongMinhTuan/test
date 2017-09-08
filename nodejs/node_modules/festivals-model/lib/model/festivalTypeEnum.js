'use strict';

module.exports.FestivalTypeEnum = {
  FANTASY: 'FANTASY',
  MUSIC: 'MUSIC',
  MOBILIZATION: 'MOBILIZATION',

  getType: function (type) {

    if (!this.hasOwnProperty(type)) {
      return null;
    }

    return module.exports.FestivalTypeEnum[type];
  }
};
