'use strict';

var EventResponse = function EventResponse(id, name, description, tags, status, mainImage, duration, place, category, authors, publishedAt, createdAt, updatedAt) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.tags = tags;
  this.status = status;
  this.mainImage = mainImage;
  this.duration = duration;
  this.place = place;
  this.category = category;
  this.authors = authors;
  this.publishedAt = publishedAt;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
};

var EventResponseBuilder = function EventResponseBuilder() {
  this.id = null;
  this.name = null;
  this.description = null;
  this.tags = null;
  this.status = null;
  this.mainImage = null;
  this.duration = null;
  this.place = null;
  this.category = null;
  this.authors = null;
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

  this.withTags = function withTags(tags) {
    self.tags = tags;
    return self;
  };

  this.withStatus = function withStatus(status) {
    self.status = status;
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
    return new EventResponse(
     self.id, 
     self.name, 
     self.description, 
     self.tags, 
     self.status, 
     self.mainImage, 
     self.duration, 
     self.place, 
     self.category, 
     self.authors, 
     self.publishedAt, 
     self.createdAt, 
     self.updatedAt
    );
  };

};

module.exports = {
  EventResponse: EventResponse,
  EventResponseBuilder: EventResponseBuilder
};
