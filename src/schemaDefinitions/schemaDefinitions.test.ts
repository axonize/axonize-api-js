import Api from '../index';
import { generateID } from '../utils/id';
import { getCredentialsFromENV } from '../utils/tests';
test('Test get Schema Definition', (done) => {
  const api = new Api(getCredentialsFromENV());
  api.defaults.setInternalApiKey(process.env.internalApiKey || 'failure')
  const anId = generateID();
  return api.schemaDefinitions.create({
    "appId": "fb1642c7-0ea5-4f17-b329-7040eb6c2cc1",
    "name": `test_schema_${anId}`,
    "parserType": "JsonParser",
    "schema": [
      {
        "actionType": "CustomId",
        "attributePath": "deviceId",
      },
      {
        "actionType": "Event",
        "attributePath": "temperature",
        "event": {
          "name": "Temperature",
          "typeCode": 7,
          "unit": "C"
        }
      }
    ]
  }).then(res => {
    expect(res.id).toBeDefined();
    return api.schemaDefinitions.get(res.id);
  }).then(res => {
    expect(res.id).toBeDefined();
    return api.schemaDefinitions.delete(res.id);
  }
  ).then(() => {
    done();
  });
});

test('Test create and delete Schema Definition', (done) => {
  const api = new Api(getCredentialsFromENV());
  api.defaults.setInternalApiKey(process.env.internalApiKey || 'failure')
  const anId = generateID();
  return api.schemaDefinitions.create({
    "appId": "fb1642c7-0ea5-4f17-b329-7040eb6c2cc1",
    "name": `test_schema_${anId}`,
    "parserType": "JsonParser",
    "schema": [
      {
        "actionType": "CustomId",
        "attributePath": "deviceId",
      },
      {
        "actionType": "Event",
        "attributePath": "temperature",
        "event": {
          "name": "Temperature",
          "typeCode": 7,
          "unit": "C"
        }
      }
    ]
  }).then(async res => {
    expect(res.id).toBeDefined();
    await api.schemaDefinitions.delete(res.id);
    done()
  });
});

test('Test schema definition against example event', (done) => {
  const api = new Api();

  const expectedProductId = '5d595117e3b0c73350a56d71';
  const deviceId = '5d5966f4e3b0c626cc88a15d';
  const payload = JSON.stringify({
    deviceId: 'autoDiscoverytestdevice',
    temperature: 12,
  });

  api.defaults.setInternalApiKey(process.env.internalApiKey || 'failure')

  return api.schemaDefinitions.parseSchemaWithEvent({ deviceId, payload, sendToHub: false }).then(res => {
    const parseResults = JSON.parse(res.value);
    expect(parseResults).toHaveProperty([0,'device','productId'], expectedProductId);
    done()
  });
})

