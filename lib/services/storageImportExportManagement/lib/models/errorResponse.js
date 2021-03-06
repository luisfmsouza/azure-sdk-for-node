/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Describes the model for Error Response.
 *
 */
class ErrorResponse {
  /**
   * Create a ErrorResponse.
   * @member {object} [error] Describes the error information
   * @member {array} [error.details] Describes the error details if present.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorResponse
   *
   * @returns {object} metadata of ErrorResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorResponse',
      type: {
        name: 'Composite',
        className: 'ErrorResponse',
        modelProperties: {
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'ErrorInfo'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorResponse;
