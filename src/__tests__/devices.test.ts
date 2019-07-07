import Api from '../index';
import { generateID } from '../utils/id';

const getCredentialsFromENV = () => {
  return {
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
  };
};

test('Test basic devices call', () => {
  const api = new Api(getCredentialsFromENV());

  return api.devices.getDevices().then(devices => {
    expect(!!devices.length).toEqual(true);
  });
});

test('Test device not found', async () => {
  const api = new Api(getCredentialsFromENV());

  try {
    await api.devices.getDevice('2');
  } catch (e) {
    expect(e.statusCode).toEqual(404);
  }
});

test('Add device without productId', async () => {
  const api = new Api(getCredentialsFromENV());
  const name = 'Library Test Device';

  try {
    await api.devices.addDevice({ name });
  } catch (e) {
    expect(e.statusCode).toEqual(400);
  }
});

test('Update device', async () => {
  const api = new Api(getCredentialsFromENV());

  const devices = await api.devices.getDevices();
  const device = devices[0];
  const generateId = generateID();

  const updatedDevice = await api.devices.updateDevice(device.id, { libraryTestProperty: generateId });
  expect(updatedDevice.libraryTestProperty).toEqual(generateId);
});
