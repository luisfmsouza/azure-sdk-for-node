/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as moment from "moment";

/**
 * Response base
 */
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

/**
 * Defines a thing.
 */
export interface Thing extends Response {
  /**
   * The name of the thing represented by this object.
   */
  readonly name?: string;
  /**
   * The URL to get more information about the thing represented by this object.
   */
  readonly url?: string;
  /**
   * An image of the item.
   */
  readonly image?: ImageObject;
  /**
   * A short description of the item.
   */
  readonly description?: string;
  /**
   * An alias for the item
   */
  readonly alternateName?: string;
  /**
   * An ID that uniquely identifies this item.
   */
  readonly bingId?: string;
}

/**
 * The most generic kind of creative work, including books, movies, photographs, software programs,
 * etc.
 */
export interface CreativeWork extends Thing {
  /**
   * The URL to a thumbnail of the item.
   */
  readonly thumbnailUrl?: string;
  /**
   * The source of the creative work.
   */
  readonly provider?: Thing[];
  /**
   * The date on which the CreativeWork was published.
   */
  readonly datePublished?: string;
  /**
   * A video of the item.
   */
  readonly video?: VideoObject;
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
  /**
   * The news category that the article belongs to. For example, Sports. If the news category
   * cannot be determined, the article does not include this field.
  */
  readonly category?: string;
  /**
   * A Boolean value that indicates whether the news article is a headline. If true, the article is
   * a headline. The article includes this field only for news categories requests that do not
   * specify the category query parameter.
  */
  readonly headline?: boolean;
  /**
   * A list of related news articles.
  */
  readonly clusteredArticles?: NewsArticle[];
}

/**
 * Defines an answer.
*/
export interface Answer extends Response {
  readonly followUpQueries?: Query[];
}

/**
 * Defines a search result answer.
*/
export interface SearchResultsAnswer extends Answer {
  /**
   * The estimated number of webpages that are relevant to the query. Use this number along with
   * the count and offset query parameters to page the results.
  */
  readonly totalEstimatedMatches?: number;
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
  /**
   * Location of local news
  */
  readonly location?: string;
}

/**
 * Defines a media object.
*/
export interface MediaObject extends CreativeWork {
  /**
   * Original URL to retrieve the source (file) for the media object (e.g the source URL for the
   * image).
  */
  readonly contentUrl?: string;
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
  /**
   * The URL that you use to get the results of the related search. Before using the URL, you must
   * append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. Use
   * this URL if you're displaying the results in your own user interface. Otherwise, use the
   * webSearchUrl URL.
  */
  readonly searchLink?: string;
  /**
   * The URL to a thumbnail of a related image.
  */
  readonly thumbnail?: ImageObject;
}

export interface NewsTopic extends Thing {
  /**
   * A Boolean value that indicates whether the topic is considered breaking news. If the topic is
   * considered breaking news, the value is true.
  */
  readonly isBreakingNews?: boolean;
  /**
   * A search query term that returns this trending topic.
  */
  readonly query?: Query;
  /**
   * The URL to the Bing News search results for the search query term
  */
  readonly newsSearchUrl?: string;
}

export interface TrendingTopics extends Answer {
  /**
   * A list of trending news topics on Bing
  */
  value: NewsTopic[];
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
 * Defines an organization.
*/
export interface Organization extends Thing {
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
