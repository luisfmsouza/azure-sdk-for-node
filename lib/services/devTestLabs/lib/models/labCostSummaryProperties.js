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
 * The properties of the cost summary.
 *
 */
class LabCostSummaryProperties {
  /**
   * Create a LabCostSummaryProperties.
   * @member {number} [estimatedLabCost] The cost component of the cost item.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LabCostSummaryProperties
   *
   * @returns {object} metadata of LabCostSummaryProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LabCostSummaryProperties',
      type: {
        name: 'Composite',
        className: 'LabCostSummaryProperties',
        modelProperties: {
          estimatedLabCost: {
            required: false,
            serializedName: 'estimatedLabCost',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = LabCostSummaryProperties;