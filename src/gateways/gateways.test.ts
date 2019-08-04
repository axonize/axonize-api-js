import Api from '../index';
import { generateID } from '../utils/id';
import { getCredentialsFromENV } from '../utils/tests';

test('Test createAndInstall gateway', (done) => {
  const api = new Api(getCredentialsFromENV());

  return api.gateways.createAndInstallGateway({
    "gateway": {
      "name": `dev-http-gateway-api-client-test-${generateID}`,
      "type": "HttpGatewayProducer",
      "manufacturer": "MichaelSalaverry"
    }
  }).then(_ => {
    done()
  });
});
