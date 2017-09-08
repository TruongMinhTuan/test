'use strict';

var CategoryRequest = function CategoryRequest(parent, name) {
  this.parent = parent;
  this.name = name;
};

var CategoryRequestBuilder = function CategoryRequestBuilder() {
  this.parent = null;
  this.name = null;

  var self = this;

  this.withParent = function withParent(parent) {
    self.parent = parent;
    return self;
  };

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };


  this.build = function build() {
    return new CategoryRequest(
     self.parent, 
     self.name
    );
  };

};

module.exports = {
  CategoryRequest: CategoryRequest,
  CategoryRequestBuilder: CategoryRequestBuilder
};
