'use strict';

var PlaceRequest = function PlaceRequest(name, parent, openingTimes, coordinates, images) {
  this.name = name;
  this.parent = parent;
  this.openingTimes = openingTimes;
  this.coordinates = coordinates;
  this.images = images;
};

var PlaceRequestBuilder = function PlaceRequestBuilder() {
  this.name = null;
  this.parent = null;
  this.openingTimes = null;
  this.coordinates = null;
  this.images = null;

  var self = this;

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withParent = function withParent(parent) {
    self.parent = parent;
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

  this.withImages = function withImages(images) {
    self.images = images;
    return self;
  };


  this.build = function build() {
    return new PlaceRequest(
     self.name, 
     self.parent, 
     self.openingTimes, 
     self.coordinates, 
     self.images
    );
  };

};

module.exports = {
  PlaceRequest: PlaceRequest,
  PlaceRequestBuilder: PlaceRequestBuilder
};
