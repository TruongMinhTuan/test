'use strict';

var FestivalPlaceNotFoundError = function FestivalPlaceNotFoundError(message) {
  Error.call(this);
  this.name = 'FestivalPlaceNotFoundError';
  this.message = message;
  this.userMessage = 'Wybrana sala nie istnieje';
};

module.exports.FestivalPlaceNotFoundError = FestivalPlaceNotFoundError;

FestivalPlaceNotFoundError.prototype = Object.create(Error.prototype);
FestivalPlaceNotFoundError.prototype.constructor = FestivalPlaceNotFoundError;