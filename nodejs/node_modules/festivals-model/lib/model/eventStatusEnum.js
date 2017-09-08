'use strict';

var EventStatusEnum = {
  CREATED: 'CREATED',
  PUBLISHED: 'PUBLISHED',
  CANCELED: 'CANCELED',
  MOVED: 'MOVED',

  getStatus: function (status) {

    if (!this.hasOwnProperty(status)) {
      return null;
    }

    return EventStatusEnum[status];
  }
};

module.exports = {
  EventStatusEnum: EventStatusEnum
};