import Api from '../index';
import { generateID } from '../utils/id';

jest.setTimeout(parseInt(process.env.testTimeout || '60000', 10));

describe('Gateway APIs', () => {
  test('Test create and delete gateway', async () => {
    const testId = generateID();
    const testManufacturer = `api-client-test-${testId}`;
    const testProductId = '5b990c2221b5bc5244ebde78';

    const api = new Api();

    api.defaults.setUrl('http://api.dev.axonize.com');
    api.defaults.setInternalApiKey(process.env.internalApiKey || 'failure');

    const gatewayResponse = await api.gateways.create({
      manufacturer: testManufacturer,
      name: `dev-http-gateway-api-client-test-${testId}`,
      productId: testProductId,
      type: 'HttpGatewayProducer',
    });

    expect(gatewayResponse).toHaveProperty('manufacturer', testManufacturer);

    const sendDeletionRequest = async () =>
      await api.gateways.delete({
        id: gatewayResponse.id,
      });

    expect(sendDeletionRequest).not.toThrow();
  });

  test('Test get gateway', async () => {
    const testId = generateID();
    const testManufacturer = `api-client-test-${testId}`;
    const testProductId = '5b990c2221b5bc5244ebde78';

    const api = new Api();

    api.defaults.setUrl('http://api.dev.axonize.com');
    api.defaults.setInternalApiKey(process.env.internalApiKey || 'failure');

    const gatewayResponse = await api.gateways.create({
      manufacturer: testManufacturer,
      name: `dev-http-gateway-api-client-test-${testId}`,
      productId: testProductId,
      type: 'HttpGatewayProducer',
    });

    expect(gatewayResponse).toHaveProperty('manufacturer', testManufacturer);

    const existingGateway = await api.gateways.get({ id: gatewayResponse.id });

    expect(existingGateway.id).toEqual(gatewayResponse.id);

    const sendDeletionRequest = async () =>
      await api.gateways.delete({
        id: gatewayResponse.id,
      });

    expect(sendDeletionRequest).not.toThrow();
  });

  test('Test get gateway by manufacturer', async () => {
    const testId = generateID();
    const testManufacturer = `api-client-test-${testId}`;
    const testProductId = '5b990c2221b5bc5244ebde78';

    const api = new Api();

    api.defaults.setUrl('http://api.dev.axonize.com');
    api.defaults.setInternalApiKey(process.env.internalApiKey || 'failure');

    const gatewayResponse = await api.gateways.create({
      manufacturer: testManufacturer,
      name: `dev-http-gateway-api-client-test-${testId}`,
      productId: testProductId,
      type: 'HttpGatewayProducer',
    });

    expect(gatewayResponse).toHaveProperty('manufacturer', testManufacturer);

    const existingGateway = await api.gateways.getByManufacturer({ manufacturer: gatewayResponse.manufacturer });

    expect(existingGateway).toHaveProperty(['value', 0, 'id'], gatewayResponse.id);

    const sendDeletionRequest = async () =>
      await api.gateways.delete({
        id: gatewayResponse.id,
      });

    expect(sendDeletionRequest).not.toThrow();
  });
});
