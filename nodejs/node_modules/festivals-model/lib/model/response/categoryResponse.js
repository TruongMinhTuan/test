'use strict';

var CategoryResponse = function CategoryResponse(id, name, parent, createdAt, updatedAt) {
  this.id = id;
  this.name = name;
  this.parent = parent;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
};

var CategoryResponseBuilder = function CategoryResponseBuilder() {
  this.id = null;
  this.name = null;
  this.parent = null;
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

  this.withParent = function withParent(parent) {
    self.parent = parent;
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
    return new CategoryResponse(
     self.id, 
     self.name, 
     self.parent, 
     self.createdAt, 
     self.updatedAt
    );
  };

};

module.exports = {
  CategoryResponse: CategoryResponse,
  CategoryResponseBuilder: CategoryResponseBuilder
};
