'use strict';

var EventCategoryResponse = function EventCategoryResponse(id, name, breadcrumbs) {
  this.id = id;
  this.name = name;
  this.breadcrumbs = breadcrumbs;
};

var EventCategoryResponseBuilder = function EventCategoryResponseBuilder() {
  this.id = null;
  this.name = null;
  this.breadcrumbs = null;

  var self = this;

  this.withId = function withId(id) {
    self.id = id;
    return self;
  };

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withBreadcrumbs = function withBreadcrumbs(breadcrumbs) {
    self.breadcrumbs = breadcrumbs;
    return self;
  };


  this.build = function build() {
    return new EventCategoryResponse(
     self.id, 
     self.name, 
     self.breadcrumbs
    );
  };

};

module.exports = {
  EventCategoryResponse: EventCategoryResponse,
  EventCategoryResponseBuilder: EventCategoryResponseBuilder
};
