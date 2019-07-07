import Api from '../index';

const getCredentialsFromENV = () => {
  return {
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret 
  }
}

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
