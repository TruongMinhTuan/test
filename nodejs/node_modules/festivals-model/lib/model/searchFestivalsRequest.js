'use strict';

var SearchFestivalsRequest = function SearchFestivalsRequest(name,
                                                             description,
                                                             type,
                                                             status,
                                                             dateFrom,
                                                             dateTo,
                                                             locationCountry,
                                                             locationName,
                                                             locationCity,
                                                             locationState,
                                                             updatedAt,
                                                             limit,
                                                             offset,
                                                             sort) {
  this.name = name;
  this.description = description;
  this.type = type;
  this.status = status;
  this.dateFrom = dateFrom;
  this.dateTo = dateTo;
  this.locationCountry = locationCountry;
  this.locationName = locationName;
  this.locationCity = locationCity;
  this.locationState = locationState;
  this.updatedAt = updatedAt;
  this.limit = limit;
  this.offset = offset;
  this.sort = sort;
};

var SearchFestivalsRequestBuilder = function SearchFestivalsRequestBuilder() {
  this.name = null;
  this.description = null;
  this.type = null;
  this.status = null;
  this.dateFrom = null;
  this.dateTo = null;
  this.locationCountry = null;
  this.locationName = null;
  this.locationCity = null;
  this.locationState = null;
  this.updatedAt = null;
  this.limit = null;
  this.offset = null;
  this.sort = null;

  var self = this;

  this.withName = function (name) {
    self.name = name;
    return self;
  };

  this.withDescription = function (description) {
    self.description = description;
    return self;
  };

  this.withType = function (type) {
    self.type = type;
    return self;
  };

  this.withStatus = function (status) {
    self.status = status;
    return self;
  };

  this.withDateFrom = function (dateFrom) {
    self.dateFrom = dateFrom;
    return self;
  };

  this.withDateTo = function (dateTo) {
    self.dateTo = dateTo;
    return self;
  };

  this.withLocationCountry = function (locationCountry) {
    self.locationCountry = locationCountry;
    return self;
  };

  this.withLocationName = function (locationName) {
    self.locationName = locationName;
    return self;
  };

  this.withLocationCity = function (locationCity) {
    self.locationCity = locationCity;
    return self;
  };

  this.withLocationState = function (locationState) {
    self.locationState = locationState;
    return self;
  };

  this.withDateTo = function (dateTo) {
    self.dateTo = dateTo;
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
    return new SearchFestivalsRequest(
      self.name,
      self.description,
      self.type,
      self.status,
      self.dateFrom,
      self.dateTo,
      self.locationCountry,
      self.locationName,
      self.locationCity,
      self.locationState,
      self.updatedAt,
      self.limit,
      self.offset,
      self.sort
    );
  };

};

module.exports = {
  SearchFestivalsRequest: SearchFestivalsRequest,
  SearchFestivalsRequestBuilder: SearchFestivalsRequestBuilder
};