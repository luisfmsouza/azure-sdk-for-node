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
 * Specify action need to be taken when rule type is converting log to metric
 *
 * @extends models['Action']
 */
class LogToMetricAction extends models['Action'] {
  /**
   * Create a LogToMetricAction.
   * @property {object} criteria Severity of the alert
   * @property {string} [criteria.metricName] Name of the metric
   * @property {array} [criteria.dimensions] List of Dimensions for creating
   * metric
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LogToMetricAction
   *
   * @returns {object} metadata of LogToMetricAction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.LogToMetricAction',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Action',
        className: 'LogToMetricAction',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: 'odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          criteria: {
            required: true,
            serializedName: 'criteria',
            type: {
              name: 'Composite',
              className: 'Criteria'
            }
          }
        }
      }
    };
  }
}

module.exports = LogToMetricAction;
