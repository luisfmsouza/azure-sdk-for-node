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
 * The baseline results of a single metric.
 *
 */
class SingleMetricBaseline {
  /**
   * Create a SingleMetricBaseline.
   * @property {string} id The metric baseline Id.
   * @property {string} type The resource type of the metric baseline resource.
   * @property {string} name The name of the metric for which the baselines
   * were retrieved.
   * @property {string} timespan The timespan for which the data was retrieved.
   * Its value consists of two datetimes concatenated, separated by '/'.  This
   * may be adjusted in the future and returned back from what was originally
   * requested.
   * @property {moment.duration} interval The interval (window size) for which
   * the metric data was returned in.  This may be adjusted in the future and
   * returned back from what was originally requested.  This is not present if
   * a metadata request was made.
   * @property {string} [namespace] The namespace of the metrics been queried.
   * @property {array} baselines The baseline for each time series that was
   * queried.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SingleMetricBaseline
   *
   * @returns {object} metadata of SingleMetricBaseline
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SingleMetricBaseline',
      type: {
        name: 'Composite',
        className: 'SingleMetricBaseline',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          timespan: {
            required: true,
            serializedName: 'properties.timespan',
            type: {
              name: 'String'
            }
          },
          interval: {
            required: true,
            serializedName: 'properties.interval',
            type: {
              name: 'TimeSpan'
            }
          },
          namespace: {
            required: false,
            serializedName: 'properties.namespace',
            type: {
              name: 'String'
            }
          },
          baselines: {
            required: true,
            serializedName: 'properties.baselines',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TimeSeriesBaselineElementType',
                  type: {
                    name: 'Composite',
                    className: 'TimeSeriesBaseline'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SingleMetricBaseline;