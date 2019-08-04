import Api from '../index';
import { generateID } from '../utils/id';
import { getCredentialsFromENV } from '../utils/tests';

test('Test create gateway', (done) => {
  const api = new Api(getCredentialsFromENV());

  return api.gateways.create({
    "name": `dev-http-gateway-api-client-test-${generateID}`,
    "type": "HttpGatewayProducer",
    "manufacturer": "MichaelSalaverry",
  }).then(response => {
    expect(response).toMatchSnapshot()
  });
});
