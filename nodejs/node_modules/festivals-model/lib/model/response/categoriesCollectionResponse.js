'use strict';

var CategoriesCollectionResponse = function CategoriesCollectionResponse(total, categories) {
  this.total = total;
  this.categories = categories;
};

var CategoriesCollectionResponseBuilder = function CategoriesCollectionResponseBuilder() {
  this.total = null;
  this.categories = null;

  var self = this;

  this.withTotal = function withTotal(total) {
    self.total = total;
    return self;
  };

  this.withCategories = function withCategories(categories) {
    self.categories = categories;
    return self;
  };


  this.build = function build() {
    return new CategoriesCollectionResponse(
     self.total, 
     self.categories
    );
  };

};

module.exports = {
  CategoriesCollectionResponse: CategoriesCollectionResponse,
  CategoriesCollectionResponseBuilder: CategoriesCollectionResponseBuilder
};
