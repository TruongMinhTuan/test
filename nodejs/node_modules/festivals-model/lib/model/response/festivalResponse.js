'use strict';

var FestivalResponse = function FestivalResponse(id, name, description, type, status, tags, mainImage, duration, locations, publishedAt, createdAt, updatedAt) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.type = type;
  this.status = status;
  this.tags = tags;
  this.mainImage = mainImage;
  this.duration = duration;
  this.locations = locations;
  this.publishedAt = publishedAt;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
};

var FestivalResponseBuilder = function FestivalResponseBuilder() {
  this.id = null;
  this.name = null;
  this.description = null;
  this.type = null;
  this.status = null;
  this.tags = null;
  this.mainImage = null;
  this.duration = null;
  this.locations = null;
  this.publishedAt = null;
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

  this.withMainImage = function withMainImage(mainImage) {
    self.mainImage = mainImage;
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

  this.withPublishedAt = function withPublishedAt(publishedAt) {
    self.publishedAt = publishedAt;
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
    return new FestivalResponse(
     self.id, 
     self.name, 
     self.description, 
     self.type, 
     self.status, 
     self.tags, 
     self.mainImage, 
     self.duration, 
     self.locations, 
     self.publishedAt, 
     self.createdAt, 
     self.updatedAt
    );
  };

};

module.exports = {
  FestivalResponse: FestivalResponse,
  FestivalResponseBuilder: FestivalResponseBuilder
};
