'use strict';

var PlacesCollectionResponse = function PlacesCollectionResponse(total, places) {
  this.total = total;
  this.places = places;
};

var PlacesCollectionResponseBuilder = function PlacesCollectionResponseBuilder() {
  this.total = null;
  this.places = null;

  var self = this;

  this.withTotal = function withTotal(total) {
    self.total = total;
    return self;
  };

  this.withPlaces = function withPlaces(places) {
    self.places = places;
    return self;
  };


  this.build = function build() {
    return new PlacesCollectionResponse(
     self.total, 
     self.places
    );
  };

};

module.exports = {
  PlacesCollectionResponse: PlacesCollectionResponse,
  PlacesCollectionResponseBuilder: PlacesCollectionResponseBuilder
};
