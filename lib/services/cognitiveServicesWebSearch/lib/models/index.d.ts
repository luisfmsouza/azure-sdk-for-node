/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as moment from "moment";

/**
 * Defines the query context that Bing used for the request.
 */
export interface QueryContext {
  /**
   * The query string as specified in the request.
   */
  originalQuery: string;
  /**
   * The query string used by Bing to perform the query. Bing uses the altered query string if the
   * original query string contained spelling mistakes. For example, if the query string is "saling
   * downwind", the altered query string will be "sailing downwind". This field is included only if
   * the original query string contains a spelling mistake.
   */
  readonly alteredQuery?: string;
  /**
   * The query string to use to force Bing to use the original string. For example, if the query
   * string is "saling downwind", the override query string will be "+saling downwind". Remember to
   * encode the query string which results in "%2Bsaling+downwind". This field is included only if
   * the original query string contains a spelling mistake.
   */
  readonly alterationOverrideQuery?: string;
  /**
   * A Boolean value that indicates whether the specified query has adult intent. The value is true
   * if the query has adult intent; otherwise, false.
   */
  readonly adultIntent?: boolean;
  /**
   * A Boolean value that indicates whether Bing requires the user's location to provide accurate
   * results. If you specified the user's location by using the X-MSEdge-ClientIP and
   * X-Search-Location headers, you can ignore this field. For location aware queries, such as
   * "today's weather" or "restaurants near me" that need the user's location to provide accurate
   * results, this field is set to true. For location aware queries that include the location (for
   * example, "Seattle weather"), this field is set to false. This field is also set to false for
   * queries that are not location aware, such as "best sellers".
   */
  readonly askUserForLocation?: boolean;
  readonly isTransactional?: boolean;
}

/**
 * Defines a webpage's metadata.
*/
export interface WebMetaTag {
  /**
   * The metadata.
  */
  readonly name?: string;
  /**
   * The name of the metadata.
  */
  readonly content?: string;
}

export interface ResponseBase {
  /**
   * Polymorphic Discriminator
  */
  _type: string;
}

/**
 * Defines the identity of a resource.
*/
export interface Identifiable extends ResponseBase {
  /**
   * A String identifier.
  */
  readonly id?: string;
}

/**
 * Defines a response. All schemas that could be returned at the root of a response should inherit
 * from this
*/
export interface Response extends Identifiable {
  /**
   * The URL To Bing's search result for this item.
  */
  readonly webSearchUrl?: string;
}

export interface Thing extends Response {
  /**
   * The name of the thing represented by this object.
  */
  readonly name?: string;
  /**
   * The URL to get more information about the thing represented by this object.
  */
  readonly url?: string;
  readonly image?: ImageObject;
  /**
   * A short description of the item.
  */
  readonly description?: string;
  /**
   * An ID that uniquely identifies this item.
  */
  readonly bingId?: string;
}

export interface CreativeWork extends Thing {
  /**
   * The URL to a thumbnail of the item.
  */
  readonly thumbnailUrl?: string;
  /**
   * The source of the creative work.
  */
  readonly provider?: Thing[];
  readonly text?: string;
}

export interface MediaObject extends CreativeWork {
  /**
   * Original URL to retrieve the source (file) for the media object (e.g the source URL for the
   * image).
  */
  readonly contentUrl?: string;
  /**
   * URL of the page that hosts the media object.
  */
  readonly hostPageUrl?: string;
  /**
   * The width of the source media object, in pixels.
  */
  readonly width?: number;
  /**
   * The height of the source media object, in pixels.
  */
  readonly height?: number;
}

/**
 * Defines an image
*/
export interface ImageObject extends MediaObject {
  /**
   * The URL to a thumbnail of the image
  */
  readonly thumbnail?: ImageObject;
}

/**
 * Defines a webpage that is relevant to the query.
*/
export interface WebPage extends CreativeWork {
  /**
   * The display URL of the webpage. The URL is meant for display purposes only and is not well
   * formed.
  */
  readonly displayUrl?: string;
  /**
   * A snippet of text from the webpage that describes its contents.
  */
  readonly snippet?: string;
  /**
   * A list of links to related content that Bing found in the website that contains this webpage.
   * The Webpage object in this context includes only the name, url, urlPingSuffix, and snippet
   * fields.
  */
  readonly deepLinks?: WebPage[];
  /**
   * The last time that Bing crawled the webpage. The date is in the form, YYYY-MM-DDTHH:MM:SS. For
   * example, 2015-04-13T05:23:39.
  */
  readonly dateLastCrawled?: string;
  /**
   * A list of search tags that the webpage owner specified on the webpage. The API returns only
   * indexed search tags. The name field of the MetaTag object contains the indexed search tag.
   * Search tags begin with search.* (for example, search.assetId). The content field contains the
   * tag's value.
  */
  readonly searchTags?: WebMetaTag[];
  readonly primaryImageOfPage?: ImageObject;
}

export interface Answer extends Response {
  readonly followUpQueries?: Query[];
}

export interface SearchResultsAnswer extends Answer {
  readonly queryContext?: QueryContext;
  /**
   * The estimated number of webpages that are relevant to the query. Use this number along with
   * the count and offset query parameters to page the results.
  */
  readonly totalEstimatedMatches?: number;
  readonly isFamilyFriendly?: boolean;
}

/**
 * Defines a list of relevant webpage links.
*/
export interface WebWebAnswer extends SearchResultsAnswer {
  /**
   * A list of webpages that are relevant to the query.
  */
  value: WebPage[];
  /**
   * A Boolean value that indicates whether the response excluded some results from the answer. If
   * Bing excluded some results, the value is true.
  */
  readonly someResultsRemoved?: boolean;
}

/**
 * Defines a search query.
*/
export interface Query {
  /**
   * The query string. Use this string as the query term in a new search request.
  */
  text: string;
  /**
   * The display version of the query term. This version of the query term may contain special
   * characters that highlight the search term found in the query string. The string contains the
   * highlighting characters only if the query enabled hit highlighting
  */
  readonly displayText?: string;
  /**
   * The URL that takes the user to the Bing search results page for the query.Only related search
   * results include this field.
  */
  readonly webSearchUrl?: string;
  readonly searchLink?: string;
  readonly thumbnail?: ImageObject;
}

/**
 * Defines an image answer
*/
export interface Images extends SearchResultsAnswer {
  readonly nextOffset?: number;
  /**
   * A list of image objects that are relevant to the query. If there are no results, the List is
   * empty.
  */
  value: ImageObject[];
  readonly queryExpansions?: Query[];
  readonly similarTerms?: Query[];
  readonly relatedSearches?: Query[];
}

export interface Article extends CreativeWork {
  /**
   * The number of words in the text of the Article.
  */
  readonly wordCount?: number;
}

/**
 * Defines a news article.
*/
export interface NewsArticle extends Article {
}

/**
 * Defines a news answer.
*/
export interface News extends SearchResultsAnswer {
  /**
   * An array of NewsArticle objects that contain information about news articles that are relevant
   * to the query. If there are no results to return for the request, the array is empty.
  */
  value: NewsArticle[];
  readonly location?: string;
}

/**
 * Defines a list of related queries made by others.
*/
export interface RelatedSearchesRelatedSearchAnswer extends SearchResultsAnswer {
  /**
   * A list of related queries that were made by others.
  */
  value: Query[];
}

/**
 * Defines a suggested query string that likely represents the user's intent. The search results
 * include this response if Bing determines that the user may have intended to search for something
 * different. For example, if the user searches for alon brown, Bing may determine that the user
 * likely intended to search for Alton Brown instead (based on past searches by others of Alon
 * Brown).
*/
export interface SpellSuggestions extends SearchResultsAnswer {
  /**
   * A list of suggested query strings that may represent the user's intention. The list contains
   * only one Query object.
  */
  value: Query[];
}

/**
 * Defines a date and time for a geographical location.
*/
export interface TimeZoneTimeZoneInformation {
  /**
   * The name of the geographical location.For example, County; City; City, State; City, State,
   * Country; or Time Zone.
  */
  location: string;
  /**
   * The data and time specified in the form, YYYY-MM-DDThh;mm:ss.ssssssZ.
  */
  time: string;
  /**
   * The offset from UTC. For example, UTC-7.
  */
  utcOffset: string;
}

/**
 * Defines the data and time of one or more geographic locations.
*/
export interface TimeZone extends SearchResultsAnswer {
  /**
   * The data and time, in UTC, of the geographic location specified in the query. If the query
   * specified a specific geographic location (for example, a city), this object contains the name
   * of the geographic location and the current date and time of the location, in UTC. If the query
   * specified a general geographic location, such as a state or country, this object contains the
   * date and time of the primary city or state found in the specified state or country. If the
   * location contains additional time zones, the otherCityTimes field contains the data and time
   * of cities or states located in the other time zones.
  */
  primaryCityTime: TimeZoneTimeZoneInformation;
  /**
   * A list of dates and times of nearby time zones.
  */
  readonly otherCityTimes?: TimeZoneTimeZoneInformation[];
}

/**
 * Defines a video object that is relevant to the query.
*/
export interface VideoObject extends MediaObject {
  readonly motionThumbnailUrl?: string;
  readonly motionThumbnailId?: string;
  readonly embedHtml?: string;
  readonly allowHttpsEmbed?: boolean;
  readonly viewCount?: number;
  readonly thumbnail?: ImageObject;
  readonly videoId?: string;
  readonly allowMobileEmbed?: boolean;
  readonly isSuperfresh?: boolean;
}

/**
 * Defines a video answer.
*/
export interface Videos extends SearchResultsAnswer {
  /**
   * A list of video objects that are relevant to the query.
  */
  value: VideoObject[];
  readonly nextOffset?: number;
  readonly queryExpansions?: Query[];
  readonly relatedSearches?: Query[];
}

/**
 * Defines an expression and its answer
*/
export interface Computation extends Answer {
  /**
   * The math or conversion expression. If the query contains a request to convert units of measure
   * (for example, meters to feet), this field contains the from units and value contains the to
   * units. If the query contains a mathematical expression such as 2+2, this field contains the
   * expression and value contains the answer. Note that mathematical expressions may be
   * normalized. For example, if the query was sqrt(4^2+8^2), the normalized expression may be
   * sqrt((4^2)+(8^2)). If the user's query is a math question and the textDecorations query
   * parameter is set to true, the expression string may include formatting markers. For example,
   * if the user's query is log(2), the normalized expression includes the subscript markers. For
   * more information, see Hit Highlighting.
  */
  expression: string;
  /**
   * The expression's answer.
  */
  value: string;
}

/**
 * Defines a search result item to display
*/
export interface RankingRankingItem {
  /**
   * The answer that contains the item to display. Use the type to find the answer in the
   * SearchResponse object. The type is the name of a SearchResponse field. Possible values
   * include: 'WebPages', 'Images', 'SpellSuggestions', 'News', 'RelatedSearches', 'Videos',
   * 'Computation', 'TimeZone'
  */
  answerType: string;
  /**
   * A zero-based index of the item in the answer.If the item does not include this field, display
   * all items in the answer. For example, display all news articles in the News answer.
  */
  readonly resultIndex?: number;
  /**
   * The ID that identifies either an answer to display or an item of an answer to display. If the
   * ID identifies an answer, display all items of the answer.
  */
  readonly value?: Identifiable;
  readonly htmlIndex?: number;
  readonly textualIndex?: number;
  readonly screenshotIndex?: number;
}

/**
 * Defines a search results group, such as mainline.
*/
export interface RankingRankingGroup {
  /**
   * A list of search result items to display in the group.
  */
  items: RankingRankingItem[];
}

/**
 * Defines where on the search results page content should be placed and in what order.
*/
export interface RankingRankingResponse {
  /**
   * The search results that should be afforded the most visible treatment (for example, displayed
   * above the mainline and sidebar).
  */
  readonly pole?: RankingRankingGroup;
  /**
   * The search results to display in the mainline.
  */
  readonly mainline?: RankingRankingGroup;
  /**
   * The search results to display in the sidebar.
  */
  readonly sidebar?: RankingRankingGroup;
}

/**
 * Defines the top-level object that the response includes when the request succeeds.
*/
export interface SearchResponse extends Response {
  /**
   * An object that contains the query string that Bing used for the request. This object contains
   * the query string as entered by the user. It may also contain an altered query string that Bing
   * used for the query if the query string contained a spelling mistake.
  */
  readonly queryContext?: QueryContext;
  /**
   * A list of webpages that are relevant to the search query.
  */
  readonly webPages?: WebWebAnswer;
  /**
   * A list of images that are relevant to the search query.
  */
  readonly images?: Images;
  /**
   * A list of news articles that are relevant to the search query.
  */
  readonly news?: News;
  /**
   * A list of related queries made by others.
  */
  readonly relatedSearches?: RelatedSearchesRelatedSearchAnswer;
  /**
   * The query string that likely represents the user's intent.
  */
  readonly spellSuggestions?: SpellSuggestions;
  /**
   * The date and time of one or more geographic locations.
  */
  readonly timeZone?: TimeZone;
  /**
   * A list of videos that are relevant to the search query.
  */
  readonly videos?: Videos;
  /**
   * The answer to a math expression or units conversion expression.
  */
  readonly computation?: Computation;
  /**
   * The order that Bing suggests that you display the search results in.
  */
  readonly rankingResponse?: RankingRankingResponse;
}

/**
 * Defines a local entity answer.
*/
export interface Places extends SearchResultsAnswer {
  /**
   * A list of local entities, such as restaurants or hotels.
  */
  value: Thing[];
}

/**
 * Defines the error that occurred.
*/
export interface ErrorModel {
  /**
   * The error code that identifies the category of error. Possible values include: 'None',
   * 'ServerError', 'InvalidRequest', 'RateLimitExceeded', 'InvalidAuthorization',
   * 'InsufficientAuthorization'
  */
  code: string;
  /**
   * The error code that further helps to identify the error. Possible values include:
   * 'UnexpectedError', 'ResourceError', 'NotImplemented', 'ParameterMissing',
   * 'ParameterInvalidValue', 'HttpNotAllowed', 'Blocked', 'AuthorizationMissing',
   * 'AuthorizationRedundancy', 'AuthorizationDisabled', 'AuthorizationExpired'
  */
  readonly subCode?: string;
  /**
   * A description of the error.
  */
  message: string;
  /**
   * A description that provides additional information about the error.
  */
  readonly moreDetails?: string;
  /**
   * The parameter in the request that caused the error.
  */
  readonly parameter?: string;
  /**
   * The parameter's value in the request that was not valid.
  */
  readonly value?: string;
}

/**
 * The top-level response that represents a failed request.
*/
export interface ErrorResponse extends Response {
  /**
   * A list of errors that describe the reasons why the request failed.
  */
  errors: ErrorModel[];
}

export interface WebWebGrouping {
  webPages: WebPage[];
  /**
   * Polymorphic Discriminator
  */
  _type: string;
}

export interface Intangible extends Thing {
}

export interface StructuredValue extends Intangible {
}
