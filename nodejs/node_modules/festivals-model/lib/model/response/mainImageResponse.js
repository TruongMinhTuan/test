'use strict';

var MainImageResponse = function MainImageResponse(small, medium, large) {
  this.small = small;
  this.medium = medium;
  this.large = large;
};

var MainImageResponseBuilder = function MainImageResponseBuilder() {
  this.small = null;
  this.medium = null;
  this.large = null;

  var self = this;

  this.withSmall = function withSmall(small) {
    self.small = small;
    return self;
  };

  this.withMedium = function withMedium(medium) {
    self.medium = medium;
    return self;
  };

  this.withLarge = function withLarge(large) {
    self.large = large;
    return self;
  };


  this.build = function build() {
    return new MainImageResponse(
     self.small, 
     self.medium, 
     self.large
    );
  };

};

module.exports = {
  MainImageResponse: MainImageResponse,
  MainImageResponseBuilder: MainImageResponseBuilder
};
