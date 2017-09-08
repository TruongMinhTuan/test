'use strict';

var SearchFestivalCategoriesRequest = function SearchFestivalCategoriesRequest(name,
                                                                               parent,
                                                                               updatedAt,
                                                                               limit,
                                                                               offset,
                                                                               sort) {
  this.name = name;
  this.parent = parent;
  this.updatedAt = updatedAt;
  this.limit = limit;
  this.offset = offset;
  this.sort = sort;
};

var SearchFestivalCategoriesRequestBuilder = function SearchFestivalCategoriesRequestBuilder() {
  this.name = null;
  this.parent = null;
  this.updatedAt = null;
  this.limit = null;
  this.offset = null;
  this.sort = null;

  var self = this;

  this.withName = function (name) {
    self.name = name;
    return self;
  };

  this.withParent = function (parent) {
    self.parent = parent;
    return self;
  };

  this.withUpdatedAt = function (updatedAt) {
    self.updatedAt = updatedAt;
    return self;
  };

  this.withLimit = function (limit) {
    self.limit = limit;
    return self;
  };

  this.withOffset = function (offset) {
    self.offset = offset;
    return self;
  };

  this.withSort = function (sort) {
    self.sort = sort;
    return self;
  };

  this.build = function () {
    return new SearchFestivalCategoriesRequest(
      self.name,
      self.parent,
      self.updatedAt,
      self.limit,
      self.offset,
      self.sort
    );
  };
};

module.exports = {
  SearchFestivalCategoriesRequest: SearchFestivalCategoriesRequest,
  SearchFestivalCategoriesRequestBuilder: SearchFestivalCategoriesRequestBuilder
};