'use strict';

var EventRequest = function EventRequest(name, description, tags, status, metadata, images, duration, place, category, authors) {
  this.name = name;
  this.description = description;
  this.tags = tags;
  this.status = status;
  this.metadata = metadata;
  this.images = images;
  this.duration = duration;
  this.place = place;
  this.category = category;
  this.authors = authors;
};

var EventRequestBuilder = function EventRequestBuilder() {
  this.name = null;
  this.description = null;
  this.tags = null;
  this.status = null;
  this.metadata = null;
  this.images = null;
  this.duration = null;
  this.place = null;
  this.category = null;
  this.authors = null;

  var self = this;

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withDescription = function withDescription(description) {
    self.description = description;
    return self;
  };

  this.withTags = function withTags(tags) {
    self.tags = tags;
    return self;
  };

  this.withStatus = function withStatus(status) {
    self.status = status;
    return self;
  };

  this.withMetadata = function withMetadata(metadata) {
    self.metadata = metadata;
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

  this.withPlace = function withPlace(place) {
    self.place = place;
    return self;
  };

  this.withCategory = function withCategory(category) {
    self.category = category;
    return self;
  };

  this.withAuthors = function withAuthors(authors) {
    self.authors = authors;
    return self;
  };


  this.build = function build() {
    return new EventRequest(
     self.name, 
     self.description, 
     self.tags, 
     self.status, 
     self.metadata, 
     self.images, 
     self.duration, 
     self.place, 
     self.category, 
     self.authors
    );
  };

};

module.exports = {
  EventRequest: EventRequest,
  EventRequestBuilder: EventRequestBuilder
};
