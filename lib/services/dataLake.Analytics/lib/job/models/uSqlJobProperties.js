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
 * U-SQL job properties used when retrieving U-SQL jobs.
 *
 * @extends models['JobProperties']
 */
class USqlJobProperties extends models['JobProperties'] {
  /**
   * Create a USqlJobProperties.
   * @member {array} [resources] the list of resources that are required by the
   * job
   * @member {object} [statistics] the job specific statistics.
   * @member {date} [statistics.lastUpdateTimeUtc] the last update time for the
   * statistics.
   * @member {date} [statistics.finalizingTimeUtc] the job finalizing start
   * time.
   * @member {array} [statistics.stages] the list of stages for the job.
   * @member {object} [debugData] the job specific debug data locations.
   * @member {uuid} [debugData.jobId] the id of the job this data is for.
   * @member {string} [debugData.command] the command that this job data
   * relates to.
   * @member {array} [debugData.paths] the list of paths to all of the job
   * data.
   * @member {array} [diagnostics] the diagnostics for the job.
   * @member {string} [algebraFilePath] the algebra file path after the job has
   * completed
   * @member {moment.duration} [totalCompilationTime] the total time this job
   * spent compiling. This value should not be set by the user and will be
   * ignored if it is.
   * @member {moment.duration} [totalPauseTime] the total time this job spent
   * paused. This value should not be set by the user and will be ignored if it
   * is.
   * @member {moment.duration} [totalQueuedTime] the total time this job spent
   * queued. This value should not be set by the user and will be ignored if it
   * is.
   * @member {moment.duration} [totalRunningTime] the total time this job spent
   * executing. This value should not be set by the user and will be ignored if
   * it is.
   * @member {string} [rootProcessNodeId] the ID used to identify the job
   * manager coordinating job execution. This value should not be set by the
   * user and will be ignored if it is.
   * @member {string} [yarnApplicationId] the ID used to identify the yarn
   * application executing the job. This value should not be set by the user
   * and will be ignored if it is.
   * @member {number} [yarnApplicationTimeStamp] the timestamp (in ticks) for
   * the yarn application executing the job. This value should not be set by
   * the user and will be ignored if it is.
   * @member {string} [compileMode] the specific compilation mode for the job
   * used during execution. If this is not specified during submission, the
   * server will determine the optimal compilation mode. Possible values
   * include: 'Semantic', 'Full', 'SingleBox'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of USqlJobProperties
   *
   * @returns {object} metadata of USqlJobProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'USql',
      type: {
        name: 'Composite',
        className: 'USqlJobProperties',
        modelProperties: {
          runtimeVersion: {
            required: false,
            serializedName: 'runtimeVersion',
            type: {
              name: 'String'
            }
          },
          script: {
            required: true,
            serializedName: 'script',
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
          resources: {
            required: false,
            readOnly: true,
            serializedName: 'resources',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobResource'
                  }
              }
            }
          },
          statistics: {
            required: false,
            serializedName: 'statistics',
            type: {
              name: 'Composite',
              className: 'JobStatistics'
            }
          },
          debugData: {
            required: false,
            serializedName: 'debugData',
            type: {
              name: 'Composite',
              className: 'JobDataPath'
            }
          },
          diagnostics: {
            required: false,
            readOnly: true,
            serializedName: 'diagnostics',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DiagnosticsElementType',
                  type: {
                    name: 'Composite',
                    className: 'Diagnostics'
                  }
              }
            }
          },
          algebraFilePath: {
            required: false,
            readOnly: true,
            serializedName: 'algebraFilePath',
            type: {
              name: 'String'
            }
          },
          totalCompilationTime: {
            required: false,
            readOnly: true,
            serializedName: 'totalCompilationTime',
            type: {
              name: 'TimeSpan'
            }
          },
          totalPauseTime: {
            required: false,
            readOnly: true,
            serializedName: 'totalPauseTime',
            type: {
              name: 'TimeSpan'
            }
          },
          totalQueuedTime: {
            required: false,
            readOnly: true,
            serializedName: 'totalQueuedTime',
            type: {
              name: 'TimeSpan'
            }
          },
          totalRunningTime: {
            required: false,
            readOnly: true,
            serializedName: 'totalRunningTime',
            type: {
              name: 'TimeSpan'
            }
          },
          rootProcessNodeId: {
            required: false,
            readOnly: true,
            serializedName: 'rootProcessNodeId',
            type: {
              name: 'String'
            }
          },
          yarnApplicationId: {
            required: false,
            readOnly: true,
            serializedName: 'yarnApplicationId',
            type: {
              name: 'String'
            }
          },
          yarnApplicationTimeStamp: {
            required: false,
            readOnly: true,
            serializedName: 'yarnApplicationTimeStamp',
            type: {
              name: 'Number'
            }
          },
          compileMode: {
            required: false,
            readOnly: true,
            serializedName: 'compileMode',
            type: {
              name: 'Enum',
              allowedValues: [ 'Semantic', 'Full', 'SingleBox' ]
            }
          }
        }
      }
    };
  }
}

module.exports = USqlJobProperties;
