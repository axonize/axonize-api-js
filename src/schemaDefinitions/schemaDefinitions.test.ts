import Api from '../index';
import { getCredentialsFromENV } from '../utils/tests';
import { generateID } from '../utils/id';

test('Test create Schema Definition', (done) => {
  const api = new Api(getCredentialsFromENV());

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
        "name": "michaelApiClientTemperature",
        "typeCode": 7,
        "unit": "C"
      }
    ],
    "appId": "fb1642c7-0ea5-4f17-b329-7040eb6c2cc1",
    "parserType": "JsonParser"
  }).then(_ => {
    done()
  });
});
