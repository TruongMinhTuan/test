'use strict';

var AuthorResponse = function AuthorResponse(name, organization) {
  this.name = name;
  this.organization = organization;
};

var AuthorResponseBuilder = function AuthorResponseBuilder() {
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
    return new AuthorResponse(
     self.name, 
     self.organization
    );
  };

};

module.exports = {
  AuthorResponse: AuthorResponse,
  AuthorResponseBuilder: AuthorResponseBuilder
};
