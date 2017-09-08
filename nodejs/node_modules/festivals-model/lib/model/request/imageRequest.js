'use strict';

var ImageRequest = function ImageRequest(url, content, order) {
  this.url = url;
  this.content = content;
  this.order = order;
};

var ImageRequestBuilder = function ImageRequestBuilder() {
  this.url = null;
  this.content = null;
  this.order = null;

  var self = this;

  this.withUrl = function withUrl(url) {
    self.url = url;
    return self;
  };

  this.withContent = function withContent(content) {
    self.content = content;
    return self;
  };

  this.withOrder = function withOrder(order) {
    self.order = order;
    return self;
  };


  this.build = function build() {
    return new ImageRequest(
     self.url, 
     self.content, 
     self.order
    );
  };

};

module.exports = {
  ImageRequest: ImageRequest,
  ImageRequestBuilder: ImageRequestBuilder
};
