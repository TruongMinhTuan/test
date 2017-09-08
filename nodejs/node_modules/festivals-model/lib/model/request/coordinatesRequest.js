'use strict';

var CoordinatesRequest = function CoordinatesRequest(lat, lon) {
  this.lat = lat;
  this.lon = lon;
};

var CoordinatesRequestBuilder = function CoordinatesRequestBuilder() {
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
    return new CoordinatesRequest(
     self.lat, 
     self.lon
    );
  };

};

module.exports = {
  CoordinatesRequest: CoordinatesRequest,
  CoordinatesRequestBuilder: CoordinatesRequestBuilder
};
