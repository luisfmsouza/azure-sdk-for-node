/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the LocationCollection class.
 * @constructor
 * @member {array} value
 * 
 * @member {string} [nextlink] Gets the URL to get the next set of results.
 * 
 */
function LocationCollection() {
}

util.inherits(LocationCollection, Array);

/**
 * Defines the metadata of LocationCollection
 *
 * @returns {object} metadata of LocationCollection
 *
 */
LocationCollection.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'LocationCollection',
    type: {
      name: 'Composite',
      className: 'LocationCollection',
      modelProperties: {
        value: {
          required: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'LocationElementType',
                type: {
                  name: 'Composite',
                  className: 'Location'
                }
            }
          }
        },
        nextlink: {
          required: false,
          serializedName: 'nextlink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = LocationCollection;