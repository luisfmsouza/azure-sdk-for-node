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
 * Represents available provider operation.
 *
 */
class AvailableProviderOperation {
  /**
   * Create a AvailableProviderOperation.
   * @member {string} [name] The name of the operation being performed on a
   * particular object. Name format:
   * "{resourceProviderNamespace}/{resourceType}/{read|write|delete|action}".
   * Eg. Microsoft.StorSimple/managers/devices/volumeContainers/read,
   * Microsoft.StorSimple/managers/devices/alerts/clearAlerts/action
   * @member {object} [display] Contains the localized display information for
   * this particular operation/action.
   * @member {string} [display.provider] The localized friendly form of the
   * resource provider name - it is expected to also include the
   * publisher/company responsible. It should use Title Casing and begin with
   * 'Microsoft' for 1st party services.
   * @member {string} [display.resource] The localized friendly form of the
   * resource type related to this action/operation - it should match the
   * public documentation for the resource provider. It should use Title Casing
   * - for examples, please refer to the 'name' section.
   * @member {string} [display.operation] The localized friendly name for the
   * operation, as it should be shown to the user. It should be concise (to fit
   * in drop downs) but clear (i.e. self-documenting). It should use Title
   * Casing and include the entity/resource to which it applies.
   * @member {string} [display.description] The localized friendly description
   * for the operation, as it should be shown to the user. It should be
   * thorough, yet concise - it will be used in tool tips and detailed views.
   * @member {string} [origin] The intended executor of the operation; governs
   * the display of the operation in the RBAC UX and the audit logs UX. Default
   * value is "user,system"
   * @member {object} [properties] Reserved for future use.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AvailableProviderOperation
   *
   * @returns {object} metadata of AvailableProviderOperation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AvailableProviderOperation',
      type: {
        name: 'Composite',
        className: 'AvailableProviderOperation',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          display: {
            required: false,
            serializedName: 'display',
            type: {
              name: 'Composite',
              className: 'AvailableProviderOperationDisplay'
            }
          },
          origin: {
            required: false,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = AvailableProviderOperation;