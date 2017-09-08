'use strict';

var FestivalRequest = function FestivalRequest(name, description, type, status, tags, images, duration, locations) {
  this.name = name;
  this.description = description;
  this.type = type;
  this.status = status;
  this.tags = tags;
  this.images = images;
  this.duration = duration;
  this.locations = locations;
};

var FestivalRequestBuilder = function FestivalRequestBuilder() {
  this.name = null;
  this.description = null;
  this.type = null;
  this.status = null;
  this.tags = null;
  this.images = null;
  this.duration = null;
  this.locations = null;

  var self = this;

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withDescription = function withDescription(description) {
    self.description = description;
    return self;
  };

  this.withType = function withType(type) {
    self.type = type;
    return self;
  };

  this.withStatus = function withStatus(status) {
    self.status = status;
    return self;
  };

  this.withTags = function withTags(tags) {
    self.tags = tags;
    return self;
  };

  this.withImages = function withImages(images) {
    self.images = images;
    return self;
  };

  this.withDuration = function withDuration(duration) {
    self.duration = duration;
    return self;
  };

  this.withLocations = function withLocations(locations) {
    self.locations = locations;
    return self;
  };


  this.build = function build() {
    return new FestivalRequest(
     self.name, 
     self.description, 
     self.type, 
     self.status, 
     self.tags, 
     self.images, 
     self.duration, 
     self.locations
    );
  };

};

module.exports = {
  FestivalRequest: FestivalRequest,
  FestivalRequestBuilder: FestivalRequestBuilder
};
