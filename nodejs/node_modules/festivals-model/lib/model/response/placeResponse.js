'use strict';

var PlaceResponse = function PlaceResponse(id, name, parent, openingTimes, coordinates, mainImage, createdAt, updatedAt) {
  this.id = id;
  this.name = name;
  this.parent = parent;
  this.openingTimes = openingTimes;
  this.coordinates = coordinates;
  this.mainImage = mainImage;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
};

var PlaceResponseBuilder = function PlaceResponseBuilder() {
  this.id = null;
  this.name = null;
  this.parent = null;
  this.openingTimes = null;
  this.coordinates = null;
  this.mainImage = null;
  this.createdAt = null;
  this.updatedAt = null;

  var self = this;

  this.withId = function withId(id) {
    self.id = id;
    return self;
  };

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

  this.withMainImage = function withMainImage(mainImage) {
    self.mainImage = mainImage;
    return self;
  };

  this.withCreatedAt = function withCreatedAt(createdAt) {
    self.createdAt = createdAt;
    return self;
  };

  this.withUpdatedAt = function withUpdatedAt(updatedAt) {
    self.updatedAt = updatedAt;
    return self;
  };


  this.build = function build() {
    return new PlaceResponse(
     self.id, 
     self.name, 
     self.parent, 
     self.openingTimes, 
     self.coordinates, 
     self.mainImage, 
     self.createdAt, 
     self.updatedAt
    );
  };

};

module.exports = {
  PlaceResponse: PlaceResponse,
  PlaceResponseBuilder: PlaceResponseBuilder
};
