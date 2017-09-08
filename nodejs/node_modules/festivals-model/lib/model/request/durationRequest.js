'use strict';

var DurationRequest = function DurationRequest(startAt, finishAt) {
  this.startAt = startAt;
  this.finishAt = finishAt;
};

var DurationRequestBuilder = function DurationRequestBuilder() {
  this.startAt = null;
  this.finishAt = null;

  var self = this;

  this.withStartAt = function withStartAt(startAt) {
    self.startAt = startAt;
    return self;
  };

  this.withFinishAt = function withFinishAt(finishAt) {
    self.finishAt = finishAt;
    return self;
  };


  this.build = function build() {
    return new DurationRequest(
     self.startAt, 
     self.finishAt
    );
  };

};

module.exports = {
  DurationRequest: DurationRequest,
  DurationRequestBuilder: DurationRequestBuilder
};
