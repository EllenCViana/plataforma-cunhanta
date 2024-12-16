const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'cunhanta',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

