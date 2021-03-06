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

/**
 * The parameters supplied to the create test job operation.
 *
 */
class TestJobCreateParameters {
  /**
   * Create a TestJobCreateParameters.
   * @member {object} [parameters] Gets or sets the parameters of the test job.
   * @member {string} [runOn] Gets or sets the runOn which specifies the group
   * name where the job is to be executed.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestJobCreateParameters
   *
   * @returns {object} metadata of TestJobCreateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestJobCreateParameters',
      type: {
        name: 'Composite',
        className: 'TestJobCreateParameters',
        modelProperties: {
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          runOn: {
            required: false,
            serializedName: 'runOn',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TestJobCreateParameters;
