'use strict';

module.exports.FestivalStatusEnum = {
  CREATED: 'CREATED',
  PUBLISHED: 'PUBLISHED',
  CANCELED: 'CANCELED',

  getStatus: function (status) {

    if (!this.hasOwnProperty(status)) {
      return null;
    }

    return module.exports.FestivalStatusEnum[status];
  }
};
