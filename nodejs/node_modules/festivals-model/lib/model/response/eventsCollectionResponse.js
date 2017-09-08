'use strict';

var EventsCollectionResponse = function EventsCollectionResponse(total, events) {
  this.total = total;
  this.events = events;
};

var EventsCollectionResponseBuilder = function EventsCollectionResponseBuilder() {
  this.total = null;
  this.events = null;

  var self = this;

  this.withTotal = function withTotal(total) {
    self.total = total;
    return self;
  };

  this.withEvents = function withEvents(events) {
    self.events = events;
    return self;
  };


  this.build = function build() {
    return new EventsCollectionResponse(
     self.total, 
     self.events
    );
  };

};

module.exports = {
  EventsCollectionResponse: EventsCollectionResponse,
  EventsCollectionResponseBuilder: EventsCollectionResponseBuilder
};
