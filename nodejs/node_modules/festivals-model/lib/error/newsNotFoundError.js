'use strict';

var NewsNotFoundError = function NewsNotFoundError(message) {
  Error.call(this);
  this.name = 'NewsNotFoundError';
  this.message = message;
  this.userMessage = 'Wybrana wiadomość nie istnieje';
};

module.exports.NewsNotFoundError = NewsNotFoundError;

NewsNotFoundError.prototype = Object.create(Error.prototype);
NewsNotFoundError.prototype.constructor = NewsNotFoundError;