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
 * Describes the parameters for provisioning a cluster.
 *
 */
class ProvisionFabricDescription {
  /**
   * Create a ProvisionFabricDescription.
   * @property {string} [codeFilePath] The cluster code package file path.
   * @property {string} [clusterManifestFilePath] The cluster manifest file
   * path.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ProvisionFabricDescription
   *
   * @returns {object} metadata of ProvisionFabricDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProvisionFabricDescription',
      type: {
        name: 'Composite',
        className: 'ProvisionFabricDescription',
        modelProperties: {
          codeFilePath: {
            required: false,
            serializedName: 'CodeFilePath',
            type: {
              name: 'String'
            }
          },
          clusterManifestFilePath: {
            required: false,
            serializedName: 'ClusterManifestFilePath',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProvisionFabricDescription;
