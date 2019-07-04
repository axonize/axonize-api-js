import * as nock from 'nock';
import Api from '../index';

test('Test basic devices call', () => {
  nock('https://api.axonize.com')
    .get('/odata/devices')
    .reply(200, { value: [{ name: 'Device 1' }] });

  const api = new Api();

  return api.devices.getDevices().then(devices => {
    expect(devices[0].name).toBe('Device 1');
  });
});

test('Test get single device entity', () => {
  nock('https://api.axonize.com')
    .get('/odata/devices/1')
    .reply(200, { id: '1' });

  const api = new Api();

  return api.devices.getDevice('1').then(device => {
    expect(device.id).toBe('1');
  });
});

test('Test device not found', async () => {
  nock('https://api.axonize.com')
    .get('/odata/devices/2')
    .reply(404);

  const api = new Api();

  try {
    await api.devices.getDevice('2');
  } catch (e) {
    expect(e.statusCode).toEqual(404);
  }
});
