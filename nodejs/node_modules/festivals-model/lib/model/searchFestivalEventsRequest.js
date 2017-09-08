'use strict';

var SearchFestivalEventsRequest = function SearchFestivalEventsRequest(name,
                                                                       place,
                                                                       startAt,
                                                                       finishAt,
                                                                       updatedAt,
                                                                       category,
                                                                       limit,
                                                                       offset,
                                                                       sort) {
  this.name = name;
  this.place = place;
  this.startAt = startAt;
  this.finishAt = finishAt;
  this.updatedAt = updatedAt;
  this.category = category;
  this.limit = limit;
  this.offset = offset;
  this.sort = sort;
};

var SearchFestivalEventsRequestBuilder = function SearchFestivalEventsRequestBuilder() {
  this.name = null;
  this.place = null;
  this.startAt = null;
  this.finishAt = null;
  this.updatedAt = null;
  this.category = null;
  this.limit = null;
  this.offset = null;
  this.sort = null;

  var self = this;

  this.withName = function (name) {
    self.name = name;
    return self;
  };

  this.withPlace = function (place) {
    self.place = place;
    return self;
  };

  this.withStartAt = function (startAt) {
    self.startAt = startAt;
    return self;
  };

  this.withFinishAt = function (finishAt) {
    self.finishAt = finishAt;
    return self;
  };

  this.withUpdatedAt = function (updatedAt) {
    self.updatedAt = updatedAt;
    return self;
  };

  this.withCategory = function (category) {
    self.category = category;
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
    return new SearchFestivalEventsRequest(
      self.name,
      self.place,
      self.startAt,
      self.finishAt,
      self.updatedAt,
      self.category,
      self.limit,
      self.offset,
      self.sort
    );
  };
};

module.exports = {
  SearchFestivalEventsRequest: SearchFestivalEventsRequest,
  SearchFestivalEventsRequestBuilder: SearchFestivalEventsRequestBuilder
};