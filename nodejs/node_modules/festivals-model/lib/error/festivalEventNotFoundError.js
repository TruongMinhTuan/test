'use strict';

var FestivalEventNotFoundError = function FestivalEventNotFoundError(message) {
  Error.call(this);
  this.name = 'FestivalEventNotFoundError';
  this.message = message;
  this.userMessage = 'Wybrane wydarzenie nie istnieje';
};

module.exports.FestivalEventNotFoundError = FestivalEventNotFoundError;

FestivalEventNotFoundError.prototype = Object.create(Error.prototype);
FestivalEventNotFoundError.prototype.constructor = FestivalEventNotFoundError;