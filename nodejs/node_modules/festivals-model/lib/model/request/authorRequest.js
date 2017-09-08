'use strict';

var AuthorRequest = function AuthorRequest(name, organization) {
  this.name = name;
  this.organization = organization;
};

var AuthorRequestBuilder = function AuthorRequestBuilder() {
  this.name = null;
  this.organization = null;

  var self = this;

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withOrganization = function withOrganization(organization) {
    self.organization = organization;
    return self;
  };


  this.build = function build() {
    return new AuthorRequest(
     self.name, 
     self.organization
    );
  };

};

module.exports = {
  AuthorRequest: AuthorRequest,
  AuthorRequestBuilder: AuthorRequestBuilder
};
