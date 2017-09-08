'use strict';

var EventPlaceResponse = function EventPlaceResponse(id, name, breadcrumbs, openingTimes, coordinates) {
  this.id = id;
  this.name = name;
  this.breadcrumbs = breadcrumbs;
  this.openingTimes = openingTimes;
  this.coordinates = coordinates;
};

var EventPlaceResponseBuilder = function EventPlaceResponseBuilder() {
  this.id = null;
  this.name = null;
  this.breadcrumbs = null;
  this.openingTimes = null;
  this.coordinates = null;

  var self = this;

  this.withId = function withId(id) {
    self.id = id;
    return self;
  };

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withBreadcrumbs = function withBreadcrumbs(breadcrumbs) {
    self.breadcrumbs = breadcrumbs;
    return self;
  };

  this.withOpeningTimes = function withOpeningTimes(openingTimes) {
    self.openingTimes = openingTimes;
    return self;
  };

  this.withCoordinates = function withCoordinates(coordinates) {
    self.coordinates = coordinates;
    return self;
  };


  this.build = function build() {
    return new EventPlaceResponse(
     self.id, 
     self.name, 
     self.breadcrumbs, 
     self.openingTimes, 
     self.coordinates
    );
  };

};

module.exports = {
  EventPlaceResponse: EventPlaceResponse,
  EventPlaceResponseBuilder: EventPlaceResponseBuilder
};
