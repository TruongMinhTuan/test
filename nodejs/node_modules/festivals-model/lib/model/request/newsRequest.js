'use strict';

var NewsRequest = function NewsRequest(name, description, status, images, authors, tags) {
  this.name = name;
  this.description = description;
  this.status = status;
  this.images = images;
  this.authors = authors;
  this.tags = tags;
};

var NewsRequestBuilder = function NewsRequestBuilder() {
  this.name = null;
  this.description = null;
  this.status = null;
  this.images = null;
  this.authors = null;
  this.tags = null;

  var self = this;

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

  this.withImages = function withImages(images) {
    self.images = images;
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


  this.build = function build() {
    return new NewsRequest(
     self.name, 
     self.description, 
     self.status, 
     self.images, 
     self.authors, 
     self.tags
    );
  };

};

module.exports = {
  NewsRequest: NewsRequest,
  NewsRequestBuilder: NewsRequestBuilder
};
