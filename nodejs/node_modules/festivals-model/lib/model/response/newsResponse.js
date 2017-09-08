'use strict';

var NewsResponse = function NewsResponse(id, name, description, status, mainImage, authors, tags, publishedAt, createdAt, updatedAt) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.status = status;
  this.mainImage = mainImage;
  this.authors = authors;
  this.tags = tags;
  this.publishedAt = publishedAt;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
};

var NewsResponseBuilder = function NewsResponseBuilder() {
  this.id = null;
  this.name = null;
  this.description = null;
  this.status = null;
  this.mainImage = null;
  this.authors = null;
  this.tags = null;
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

  this.withStatus = function withStatus(status) {
    self.status = status;
    return self;
  };

  this.withMainImage = function withMainImage(mainImage) {
    self.mainImage = mainImage;
    return self;
  };

  this.withAuthors = function withAuthors(authors) {
    self.authors = authors;
    return self;
  };

  this.withTags = function withTags(tags) {
    self.tags = tags;
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
    return new NewsResponse(
     self.id, 
     self.name, 
     self.description, 
     self.status, 
     self.mainImage, 
     self.authors, 
     self.tags, 
     self.publishedAt, 
     self.createdAt, 
     self.updatedAt
    );
  };

};

module.exports = {
  NewsResponse: NewsResponse,
  NewsResponseBuilder: NewsResponseBuilder
};
