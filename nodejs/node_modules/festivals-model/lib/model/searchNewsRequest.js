'use strict';

var SearchNewsRequest = function SearchNewsRequest(name,
                                                   country,
                                                   festival,
                                                   updatedAt,
                                                   limit,
                                                   offset,
                                                   sort) {
  this.name = name;
  this.country = country;
  this.festival = festival;
  this.updatedAt = updatedAt;
  this.limit = limit;
  this.offset = offset;
  this.sort = sort;
};

var SearchNewsRequestBuilder = function SearchNewsRequestBuilder() {
  this.name = null;
  this.country = null;
  this.festival = null;
  this.updatedAt = null;
  this.limit = null;
  this.offset = null;
  this.sort = null;

  var self = this;

  this.withName = function (name) {
    self.name = name;
    return self;
  };

  this.withCountry = function (country) {
    self.country = country;
    return self;
  };

  this.withFestival = function (festival) {
    self.festival = festival;
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
    return new SearchNewsRequest(
      self.name,
      self.country,
      self.festival,
      self.updatedAt,
      self.limit,
      self.offset,
      self.sort
    );
  };
};

module.exports = {
  SearchNewsRequest: SearchNewsRequest,
  SearchNewsRequestBuilder: SearchNewsRequestBuilder
};