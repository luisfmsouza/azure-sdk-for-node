// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9463?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9463.azuredatalakestore.net\",\"creationTime\":\"2016-01-23T01:45:53.7552161Z\",\"lastModifiedTime\":\"2016-01-23T01:45:53.7552161Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9463\",\"name\":\"xplattestadls9463\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '516',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c879ab16-60a9-418a-a399-6c6a724dc17c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2cc485a8-75f9-4619-849e-e8ff365f7d24',
  'x-ms-routing-request-id': 'WESTUS:20160123T014700Z:2cc485a8-75f9-4619-849e-e8ff365f7d24',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 23 Jan 2016 01:46:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9463?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls9463.azuredatalakestore.net\",\"creationTime\":\"2016-01-23T01:45:53.7552161Z\",\"lastModifiedTime\":\"2016-01-23T01:45:53.7552161Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls9463\",\"name\":\"xplattestadls9463\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '516',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c879ab16-60a9-418a-a399-6c6a724dc17c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2cc485a8-75f9-4619-849e-e8ff365f7d24',
  'x-ms-routing-request-id': 'WESTUS:20160123T014700Z:2cc485a8-75f9-4619-849e-e8ff365f7d24',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 23 Jan 2016 01:46:59 GMT',
  connection: 'close' });
 return result; }]];