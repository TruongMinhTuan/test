'use strict';

var CoordinatesResponse = function CoordinatesResponse(lat, lon) {
  this.lat = lat;
  this.lon = lon;
};

var CoordinatesResponseBuilder = function CoordinatesResponseBuilder() {
  this.lat = null;
  this.lon = null;

  var self = this;

  this.withLat = function withLat(lat) {
    self.lat = lat;
    return self;
  };

  this.withLon = function withLon(lon) {
    self.lon = lon;
    return self;
  };


  this.build = function build() {
    return new CoordinatesResponse(
     self.lat, 
     self.lon
    );
  };

};

module.exports = {
  CoordinatesResponse: CoordinatesResponse,
  CoordinatesResponseBuilder: CoordinatesResponseBuilder
};
