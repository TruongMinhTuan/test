'use strict';

var FestivalCategoryNotFoundError = function FestivalCategoryNotFoundError(message) {
  Error.call(this);
  this.name = 'FestivalCategoryNotFoundError';
  this.message = message;
  this.userMessage = 'Wybrana kategoria nie istnieje';
};

module.exports.FestivalCategoryNotFoundError = FestivalCategoryNotFoundError;

FestivalCategoryNotFoundError.prototype = Object.create(Error.prototype);
FestivalCategoryNotFoundError.prototype.constructor = FestivalCategoryNotFoundError;