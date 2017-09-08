'use strict';

var meta = require('./lib/meta');

module.exports = {

  error: {
    FestivalEventNotFoundError: require('./lib/error/festivalEventNotFoundError').FestivalEventNotFoundError,
    FestivalPlaceNotFoundError: require('./lib/error/festivalPlaceNotFoundError').FestivalPlaceNotFoundError,
    FestivalCategoryNotFoundError: require('./lib/error/festivalCategoryNotFoundError').FestivalCategoryNotFoundError,
    FestivalNotFoundError: require('./lib/error/festivalNotFoundError').FestivalNotFoundError,
    NewsNotFoundError: require('./lib/error/newsNotFoundError').NewsNotFoundError,
    ServiceUnavailableError: require('./lib/error/serviceUnavailableError').ServiceUnavailableError
  },
  model: {
    /**
     * the countryEnum model and builder.
     * @property countryEnum
     * @type countryEnum
     * @static
     */
    countryEnum: require('./lib/model/countryEnum'),
    /**
     * the eventStatusEnum model and builder.
     * @property eventStatusEnum
     * @type eventStatusEnum
     * @static
     */
    eventStatusEnum: require('./lib/model/eventStatusEnum'),
    /**
     * the festivalStatusEnum model and builder.
     * @property festivalStatusEnum
     * @type festivalStatusEnum
     * @static
     */
    festivalStatusEnum: require('./lib/model/festivalStatusEnum'),
    /**
     * the festivalTypeEnum model and builder.
     * @property festivalTypeEnum
     * @type festivalTypeEnum
     * @static
     */
    festivalTypeEnum: require('./lib/model/festivalTypeEnum'),
    /**
     * the newsStatusEnum model and builder.
     * @property newsStatusEnum
     * @type newsStatusEnum
     * @static
     */
    newsStatusEnum: require('./lib/model/newsStatusEnum'),

    /**
     * the searchFestivalsRequest model and builder.
     * @property searchFestivalsRequest
     * @type searchFestivalsRequest
     * @static
     */
    searchFestivalsRequest: require('./lib/model/searchFestivalsRequest'),

    /**
     * the searchFestivalEventsRequest model and builder.
     * @property searchFestivalEventsRequest
     * @type searchFestivalEventsRequest
     * @static
     */
    searchFestivalEventsRequest: require('./lib/model/searchFestivalEventsRequest'),

    /**
     * the searchFestivalPlacesRequest model and builder.
     * @property searchFestivalPlacesRequest
     * @type searchFestivalPlacesRequest
     * @static
     */
    searchFestivalPlacesRequest: require('./lib/model/searchFestivalPlacesRequest'),

    /**
     * the searchFestivalCategoriesRequest model and builder.
     * @property searchFestivalCategoriesRequest
     * @type searchFestivalCategoriesRequest
     * @static
     */
    searchFestivalCategoriesRequest: require('./lib/model/searchFestivalCategoriesRequest'),
    /**
     * the searchNewsRequest model and builder.
     * @property searchNewsRequest
     * @type searchNewsRequest
     * @static
     */
    searchNewsRequest: require('./lib/model/searchNewsRequest'),

    /**
     * the authorResponse model and builder.
     * @property authorResponse
     * @type authorResponse
     * @static
     */
    authorResponse: require('./lib/model/response/authorResponse'),

    /**
     * the categoriesCollectionResponse model and builder.
     * @property categoriesCollectionResponse
     * @type categoriesCollectionResponse
     * @static
     */
    categoriesCollectionResponse: require('./lib/model/response/categoriesCollectionResponse'),

    /**
     * the categoryResponse model and builder.
     * @property categoryResponse
     * @type categoryResponse
     * @static
     */
    categoryResponse: require('./lib/model/response/categoryResponse'),

    /**
     * the coordinatesResponse model and builder.
     * @property coordinatesResponse
     * @type coordinatesResponse
     * @static
     */
    coordinatesResponse: require('./lib/model/response/coordinatesResponse'),

    /**
     * the durationResponse model and builder.
     * @property durationResponse
     * @type durationResponse
     * @static
     */
    durationResponse: require('./lib/model/response/durationResponse'),

    /**
     * the eventCategoryResponse model and builder.
     * @property eventCategoryResponse
     * @type eventCategoryResponse
     * @static
     */
    eventCategoryResponse: require('./lib/model/response/eventCategoryResponse'),

    /**
     * the eventPlaceResponse model and builder.
     * @property eventPlaceResponse
     * @type eventPlaceResponse
     * @static
     */
    eventPlaceResponse: require('./lib/model/response/eventPlaceResponse'),

    /**
     * the eventResponse model and builder.
     * @property eventResponse
     * @type eventResponse
     * @static
     */
    eventResponse: require('./lib/model/response/eventResponse'),

    /**
     * the eventsCollectionResponse model and builder.
     * @property eventsCollectionResponse
     * @type eventsCollectionResponse
     * @static
     */
    eventsCollectionResponse: require('./lib/model/response/eventsCollectionResponse'),

    /**
     * the festivalResponse model and builder.
     * @property festivalResponse
     * @type festivalResponse
     * @static
     */
    festivalResponse: require('./lib/model/response/festivalResponse'),

    /**
     * the festivalsCollectionResponse model and builder.
     * @property festivalsCollectionResponse
     * @type festivalsCollectionResponse
     * @static
     */
    festivalsCollectionResponse: require('./lib/model/response/festivalsCollectionResponse'),

    /**
     * the locationResponse model and builder.
     * @property locationResponse
     * @type locationResponse
     * @static
     */
    locationResponse: require('./lib/model/response/locationResponse'),

    /**
     * the mainImageResponse model and builder.
     * @property mainImageResponse
     * @type mainImageResponse
     * @static
     */
    mainImageResponse: require('./lib/model/response/mainImageResponse'),

    /**
     * the newsCollectionResponse model and builder.
     * @property newsCollectionResponse
     * @type newsCollectionResponse
     * @static
     */
    newsCollectionResponse: require('./lib/model/response/newsCollectionResponse'),

    /**
     * the newsResponse model and builder.
     * @property newsResponse
     * @type newsResponse
     * @static
     */
    newsResponse: require('./lib/model/response/newsResponse'),

    /**
     * the placeResponse model and builder.
     * @property placeResponse
     * @type placeResponse
     * @static
     */
    placeResponse: require('./lib/model/response/placeResponse'),

    /**
     * the placesCollectionResponse model and builder.
     * @property placesCollectionResponse
     * @type placesCollectionResponse
     * @static
     */
    placesCollectionResponse: require('./lib/model/response/placesCollectionResponse'),

    /**
     * the authorRequest model and builder.
     * @property authorRequest
     * @type authorRequest
     * @static
     */
    authorRequest: require('./lib/model/request/authorRequest'),

    /**
     * the categoryRequest model and builder.
     * @property categoryRequest
     * @type categoryRequest
     * @static
     */
    categoryRequest: require('./lib/model/request/categoryRequest'),

    /**
     * the coordinatesRequest model and builder.
     * @property coordinatesRequest
     * @type coordinatesRequest
     * @static
     */
    coordinatesRequest: require('./lib/model/request/coordinatesRequest'),

    /**
     * the durationRequest model and builder.
     * @property durationRequest
     * @type durationRequest
     * @static
     */
    durationRequest: require('./lib/model/request/durationRequest'),

    /**
     * the eventRequest model and builder.
     * @property eventRequest
     * @type eventRequest
     * @static
     */
    eventRequest: require('./lib/model/request/eventRequest'),

    /**
     * the festivalRequest model and builder.
     * @property festivalRequest
     * @type festivalRequest
     * @static
     */
    festivalRequest: require('./lib/model/request/festivalRequest'),

    /**
     * the imageRequest model and builder.
     * @property imageRequest
     * @type imageRequest
     * @static
     */
    imageRequest: require('./lib/model/request/imageRequest'),

    /**
     * the locationRequest model and builder.
     * @property locationRequest
     * @type locationRequest
     * @static
     */
    locationRequest: require('./lib/model/request/locationRequest'),

    /**
     * the newsRequest model and builder.
     * @property newsRequest
     * @type newsRequest
     * @static
     */
    newsRequest: require('./lib/model/request/newsRequest'),

    /**
     * the placeRequest model and builder.
     * @property placeRequest
     * @type placeRequest
     * @static
     */
    placeRequest: require('./lib/model/request/placeRequest')

  },

  /**
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


