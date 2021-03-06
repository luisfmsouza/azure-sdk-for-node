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
 * CIDR Ip address
 *
 */
class CidrIpAddress {
  /**
   * Create a CidrIpAddress.
   * @property {string} [baseIpAddress] Ip address itself.
   * @property {number} [prefixLength] The length of the prefix of the ip
   * address.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CidrIpAddress
   *
   * @returns {object} metadata of CidrIpAddress
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'cidrIpAddress',
      type: {
        name: 'Composite',
        className: 'CidrIpAddress',
        modelProperties: {
          baseIpAddress: {
            required: false,
            serializedName: 'baseIpAddress',
            type: {
              name: 'String'
            }
          },
          prefixLength: {
            required: false,
            serializedName: 'prefixLength',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = CidrIpAddress;
