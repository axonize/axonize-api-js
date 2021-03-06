import Api from '../index';
import { createTestProduct } from '../products/products.test';
import { IProduct } from '../products/types';
import { generateID } from '../utils/id';
import { getCredentialsFromENV } from '../utils/tests';

jest.setTimeout(parseInt(process.env.testTimeout || '60000', 10));

describe('Devices', () => {
  test.skip('Test get all devices', async () => {
    const api = new Api(getCredentialsFromENV());

    const devices = await api.devices.getDevices();

    expect(devices.length).toBeGreaterThan(0);
  });

  test('Test device not found', async () => {
    const api = new Api(getCredentialsFromENV());

    try {
      await api.devices.getDevice('2');
    } catch (e) {
      expect(e.statusCode).toEqual(404);
    }
  });

  const createNewDevice = async (product: IProduct) => {
    const api = new Api(getCredentialsFromENV());

    const name = 'jsapiclienttest';
    const newDevice = await api.devices.addDevice({
      id: product.id,
      name,
      productId: product.id,
    });
    return newDevice;
  };

  test('Create device', async done => {
    const api = new Api(getCredentialsFromENV());

    const testProduct = await createTestProduct();
    const testDevice = await createNewDevice(testProduct);

    expect(testDevice).toHaveProperty('id');

    await api.devices.deleteDevice(testDevice.id);
    await api.products.deleteProduct(testProduct.id);
    done();
  });

  test('Update device', async done => {
    const api = new Api(getCredentialsFromENV());

    const testProduct = await createTestProduct();
    const testDevice = await createNewDevice(testProduct);
    const generatedId = generateID();

    const inActiveUpdatedDevice = await api.devices.updateDevice(testDevice.id, { active: false });
    expect(inActiveUpdatedDevice).toHaveProperty('active', false);
    const activeUpdatedDevice = await api.devices.updateDevice(testDevice.id, { active: true });
    expect(activeUpdatedDevice).toHaveProperty('active', true);

    await api.devices.deleteDevice(testDevice.id);
    await api.products.deleteProduct(testProduct.id);

    done();
  });

  test('Generate SAS Token', async done => {
    const api = new Api(getCredentialsFromENV());

    const testProduct = await createTestProduct();
    const testDevice = await createNewDevice(testProduct);

    const token = await api.devices.generateSASToken(testDevice.id);
    expect(token).toMatch(/SharedAccessSignature/);

    await api.devices.deleteDevice(testDevice.id);
    await api.products.deleteProduct(testProduct.id);

    done();
  });
});
