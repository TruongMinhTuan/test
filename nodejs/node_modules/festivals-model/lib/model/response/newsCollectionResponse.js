'use strict';

var NewsCollectionResponse = function NewsCollectionResponse(total, news) {
  this.total = total;
  this.news = news;
};

var NewsCollectionResponseBuilder = function NewsCollectionResponseBuilder() {
  this.total = null;
  this.news = null;

  var self = this;

  this.withTotal = function withTotal(total) {
    self.total = total;
    return self;
  };

  this.withNews = function withNews(news) {
    self.news = news;
    return self;
  };


  this.build = function build() {
    return new NewsCollectionResponse(
     self.total, 
     self.news
    );
  };

};

module.exports = {
  NewsCollectionResponse: NewsCollectionResponse,
  NewsCollectionResponseBuilder: NewsCollectionResponseBuilder
};
