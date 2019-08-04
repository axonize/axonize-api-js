import Api from '../index';
import { generateID } from '../utils/id';

describe('Gateway APIs', () => {
  const testId = generateID();
  const testManufacturer = `api-client-test-${testId}`;

  test('Test create and delete gateway', async () => {
    const api = new Api();
  
    api.defaults.setUrl('http://api.dev.axonize.com');
    api.defaults.setInternalApiKey(process.env.internalApiKey || 'failure')
  
    const gatewayResponse = await api.gateways.create({
      "name": `dev-http-gateway-api-client-test-${testId}`,
      "type": "HttpGatewayProducer",
      "manufacturer": testManufacturer,
    })

    expect(gatewayResponse).toHaveProperty(
      'manufacturer', testManufacturer
    )

    const sendDeletionRequest = async () => await api.gateways.delete({
      "id": gatewayResponse.id
    })

    expect(sendDeletionRequest).not.toThrow()
  });
})
