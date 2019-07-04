import * as nock from 'nock';
import Api from '../index';

test('Test basic devices call', () => {
  nock('https://api.axonize.com')
    .get('/odata/devices')
    .reply(200, [{ name: 'Device 1' }]);

  const api = new Api();

  return api.devices.getDevices().then(devices => {
    expect(devices[0].name).toBe('Device 1');
  });
});
