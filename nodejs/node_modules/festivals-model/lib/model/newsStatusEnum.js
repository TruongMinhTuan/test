'use strict';

module.exports.NewsStatusEnum = {
  CREATED: 'CREATED',
  PUBLISHED: 'PUBLISHED',
  CANCELED: 'CANCELED',

  getStatus: function (type) {

    if (!this.hasOwnProperty(type)) {
      return null;
    }

    return module.exports.NewsStatusEnum[type];
  }
};
