// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8307?api-version=2015-10-01-preview', '*')
  .reply(201, "{\"properties\":{\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8307\",\"name\":\"xplattestadls8307\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '420',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourcegroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8307/operationresults/0?api-version=2015-10-01-preview',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/d85408c3-4efc-4c43-abcc-3d158bc2f9f70?api-version=2015-10-01-preview&expanded=true',
  'x-ms-request-id': '08674756-6297-442e-922f-c851a8f6b81a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '96c88f43-383a-4102-b9bb-5e6d51e6081b',
  'x-ms-routing-request-id': 'WESTUS:20160123T014626Z:96c88f43-383a-4102-b9bb-5e6d51e6081b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 23 Jan 2016 01:46:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8307?api-version=2015-10-01-preview', '*')
  .reply(201, "{\"properties\":{\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8307\",\"name\":\"xplattestadls8307\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '420',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourcegroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8307/operationresults/0?api-version=2015-10-01-preview',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/d85408c3-4efc-4c43-abcc-3d158bc2f9f70?api-version=2015-10-01-preview&expanded=true',
  'x-ms-request-id': '08674756-6297-442e-922f-c851a8f6b81a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '96c88f43-383a-4102-b9bb-5e6d51e6081b',
  'x-ms-routing-request-id': 'WESTUS:20160123T014626Z:96c88f43-383a-4102-b9bb-5e6d51e6081b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 23 Jan 2016 01:46:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/d85408c3-4efc-4c43-abcc-3d158bc2f9f70?api-version=2015-10-01-preview&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '289cbd4b-3014-4cd8-9189-27700c0954a7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '253db6d7-dc32-4b02-951d-a8ad30367c92',
  'x-ms-routing-request-id': 'WESTUS:20160123T014657Z:253db6d7-dc32-4b02-951d-a8ad30367c92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 23 Jan 2016 01:46:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/d85408c3-4efc-4c43-abcc-3d158bc2f9f70?api-version=2015-10-01-preview&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '289cbd4b-3014-4cd8-9189-27700c0954a7',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '253db6d7-dc32-4b02-951d-a8ad30367c92',
  'x-ms-routing-request-id': 'WESTUS:20160123T014657Z:253db6d7-dc32-4b02-951d-a8ad30367c92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 23 Jan 2016 01:46:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8307?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8307.azuredatalakestore.net\",\"creationTime\":\"2016-01-23T01:46:26.6128413Z\",\"lastModifiedTime\":\"2016-01-23T01:46:26.6128413Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8307\",\"name\":\"xplattestadls8307\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '561',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'dd75d7dc-c984-4b05-845c-e991e3d5a3ca',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'eb27a444-4e80-4512-a825-d4586f8c94a3',
  'x-ms-routing-request-id': 'WESTUS:20160123T014657Z:eb27a444-4e80-4512-a825-d4586f8c94a3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 23 Jan 2016 01:46:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8307?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls8307.azuredatalakestore.net\",\"creationTime\":\"2016-01-23T01:46:26.6128413Z\",\"lastModifiedTime\":\"2016-01-23T01:46:26.6128413Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls8307\",\"name\":\"xplattestadls8307\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '561',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'dd75d7dc-c984-4b05-845c-e991e3d5a3ca',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'eb27a444-4e80-4512-a825-d4586f8c94a3',
  'x-ms-routing-request-id': 'WESTUS:20160123T014657Z:eb27a444-4e80-4512-a825-d4586f8c94a3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 23 Jan 2016 01:46:56 GMT',
  connection: 'close' });
 return result; }]];