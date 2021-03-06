// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2?api-version=2019-08-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2/operationResults/db0f97f2-ea31-40aa-92e7-ef28337fb9ec?api-version=2019-08-01',
  'retry-after': '15',
  'x-ms-request-id': 'db0f97f2-ea31-40aa-92e7-ef28337fb9ec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '75d60094-d29c-414c-a3f4-c786ac18041d',
  'x-ms-routing-request-id':
   'WESTUS:20190805T190137Z:75d60094-d29c-414c-a3f4-c786ac18041d',
  date: 'Mon, 05 Aug 2019 19:01:36 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2/operationResults/db0f97f2-ea31-40aa-92e7-ef28337fb9ec?api-version=2019-08-01')
  .reply(409, "{\"error\":{\"code\":\"SubscriptionQuotaExceeded\",\"message\":\"The regional account quota for the specified subscription has been reached.\\nRequestId:38fd8305-5249-47bd-9871-13c2ba8c3947\\nTime:2019-08-05T19:02:07.8195353Z\",\"target\":\"BatchAccount\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '241',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-correlation-request-id': 'e62a8b3a-4db1-4959-b960-e4981c8c307d',
  'x-ms-request-id': '38fd8305-5249-47bd-9871-13c2ba8c3947',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11997',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20190805T190207Z:e62a8b3a-4db1-4959-b960-e4981c8c307d',
  date: 'Mon, 05 Aug 2019 19:02:07 GMT',
  connection: 'close' });
 return result; }]];