import Api from '../index';
import { generateID } from '../utils/id';

test('Test create gateway', async () => {
  const api = new Api();

  api.defaults.setUrl('http://api.dev.axonize.com');
  api.defaults.setInternalApiKey(process.env.internalApiKey || 'failure')

  const gatewayResponse = await api.gateways.create({
    "name": `dev-http-gateway-api-client-test-${generateID()}`,
    "type": "HttpGatewayProducer",
    "manufacturer": `api-client-test-${generateID()}`,
  })

  expect(gatewayResponse).toHaveProperty(
    'status'
  )
});
