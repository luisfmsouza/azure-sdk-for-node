// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls1277.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?op=MKDIRS&api-version=2016-11-01')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7ab0d299-5336-432c-8f74-f1d9d0e163df',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:23 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls1277.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01?op=MKDIRS&api-version=2016-11-01')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7ab0d299-5336-432c-8f74-f1d9d0e163df',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:23 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls1277.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1490302583819,\"modificationTime\":1490302583819,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '75250eab-fb0c-42df-85ad-5be281364aba',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:24 GMT',
  connection: 'close',
  'content-length': '280' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls1277.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1490302583819,\"modificationTime\":1490302583819,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '75250eab-fb0c-42df-85ad-5be281364aba',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:24 GMT',
  connection: 'close',
  'content-length': '280' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls1277.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?syncFlag=CLOSE&write=true&op=CREATE&api-version=2016-11-01')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls1277.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt?syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': 'ee095adc-eba2-4f99-bd81-b36959a8343c',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:24 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls1277.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?syncFlag=CLOSE&write=true&op=CREATE&api-version=2016-11-01')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls1277.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/emptyfile.txt?syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': 'ee095adc-eba2-4f99-bd81-b36959a8343c',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:24 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls1277.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1490302584557,\"modificationTime\":1490302584557,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"msExpirationTime\":0,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0408279e-3b8f-4cfe-9143-b747fc39ab2a',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:25 GMT',
  connection: 'close',
  'content-length': '304' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls1277.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1490302584557,\"modificationTime\":1490302584557,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"msExpirationTime\":0,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0408279e-3b8f-4cfe-9143-b747fc39ab2a',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:25 GMT',
  connection: 'close',
  'content-length': '304' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls1277.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?syncFlag=CLOSE&write=true&op=CREATE&api-version=2016-11-01', '*')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls1277.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/contentfile.txt?syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': 'a06cbb54-4fe0-4b1a-b2a0-355ae582f1be',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:25 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls1277.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?syncFlag=CLOSE&write=true&op=CREATE&api-version=2016-11-01', '*')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls1277.azuredatalakestore.net/webhdfs/v1/adlssdkfolder01/contentfile.txt?syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': 'a06cbb54-4fe0-4b1a-b2a0-355ae582f1be',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:25 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls1277.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1490302585452,\"modificationTime\":1490302585540,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"msExpirationTime\":0,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '80352bac-6bab-4223-ad83-4a2d661c93f2',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:26 GMT',
  connection: 'close',
  'content-length': '305' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls1277.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1490302585452,\"modificationTime\":1490302585540,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"msExpirationTime\":0,\"aclBit\":false}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '80352bac-6bab-4223-ad83-4a2d661c93f2',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:26 GMT',
  connection: 'close',
  'content-length': '305' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls1277.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=LISTSTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1490302585452,\"modificationTime\":1490302585540,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"msExpirationTime\":0,\"aclBit\":false},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1490302584557,\"modificationTime\":1490302584557,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"msExpirationTime\":0,\"aclBit\":false}]}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '818493d6-63fa-4ba9-9c35-5ebe01c7356d',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:25 GMT',
  connection: 'close',
  'content-length': '642' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls1277.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01?op=LISTSTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1490302585452,\"modificationTime\":1490302585540,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"msExpirationTime\":0,\"aclBit\":false},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1490302584557,\"modificationTime\":1490302584557,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"msExpirationTime\":0,\"aclBit\":false}]}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '818493d6-63fa-4ba9-9c35-5ebe01c7356d',
  'x-ms-webhdfs-version': '16.12.19.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 23 Mar 2017 20:56:25 GMT',
  connection: 'close',
  'content-length': '642' });
 return result; }]];