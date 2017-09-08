'use strict';

var FestivalsCollectionResponse = function FestivalsCollectionResponse(total, festivals) {
  this.total = total;
  this.festivals = festivals;
};

var FestivalsCollectionResponseBuilder = function FestivalsCollectionResponseBuilder() {
  this.total = null;
  this.festivals = null;

  var self = this;

  this.withTotal = function withTotal(total) {
    self.total = total;
    return self;
  };

  this.withFestivals = function withFestivals(festivals) {
    self.festivals = festivals;
    return self;
  };


  this.build = function build() {
    return new FestivalsCollectionResponse(
     self.total, 
     self.festivals
    );
  };

};

module.exports = {
  FestivalsCollectionResponse: FestivalsCollectionResponse,
  FestivalsCollectionResponseBuilder: FestivalsCollectionResponseBuilder
};
