import Api from '../index';
import { getCredentialsFromENV } from '../utils/tests';
import { generateID } from '../utils/id';

test('Test create Schema Definition', (done) => {
  const api = new Api(getCredentialsFromENV());

  api.defaults.setUrl('http://api.dev.axonize.com');
  api.defaults.setInternalApiKey(process.env.internalApiKey || 'failure')

  return api.schemaDefinitions.create({
    "name": `test_schema_${generateID}`,
    "schema": [
      {
        "attributePath": "deviceId",
        "actionType": "CustomId"
      },
      {
        "attributePath": "temperature",
        "actionType": "Event",
        "event": {
          "name": "Temperature",
          "typeCode": 7,
          "unit": "C"
        }
      }
    ],
    "appId": "fb1642c7-0ea5-4f17-b329-7040eb6c2cc1",
    "parserType": "JsonParser"
  }).then(_ => {
    done()
  });
});

test('Test schema definition against example event', (done) => {
  const api = new Api();

  const deviceId = '5d5966f4e3b0c626cc88a15d';
  const payload = JSON.stringify({
    deviceId: 'autoDiscoverytestdevice',
    temperature: 12,
  });

  api.defaults.setUrl('http://api.dev.axonize.com');
  api.defaults.setInternalApiKey(process.env.internalApiKey || 'failure')

  return api.schemaDefinitions.parseSchemaWithEvent({ deviceId, payload, sendToHub: false }).then(_ => {
    done()
  });
})

