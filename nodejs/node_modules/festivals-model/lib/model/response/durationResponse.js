'use strict';

var DurationResponse = function DurationResponse(startAt, finishAt, periodMs) {
  this.startAt = startAt;
  this.finishAt = finishAt;
  this.periodMs = periodMs;
};

var DurationResponseBuilder = function DurationResponseBuilder() {
  this.startAt = null;
  this.finishAt = null;
  this.periodMs = null;

  var self = this;

  this.withStartAt = function withStartAt(startAt) {
    self.startAt = startAt;
    return self;
  };

  this.withFinishAt = function withFinishAt(finishAt) {
    self.finishAt = finishAt;
    return self;
  };

  this.withPeriodMs = function withPeriodMs(periodMs) {
    self.periodMs = periodMs;
    return self;
  };


  this.build = function build() {
    return new DurationResponse(
     self.startAt, 
     self.finishAt, 
     self.periodMs
    );
  };

};

module.exports = {
  DurationResponse: DurationResponse,
  DurationResponseBuilder: DurationResponseBuilder
};
