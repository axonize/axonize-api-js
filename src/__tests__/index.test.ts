import Api from '../index';

test('Base Configurations', () => {
  const api = new Api();
  expect(api.defaults.getUrl()).toBe('https://api.axonize.com');
});

test('Set Url method', () => {
  const api = new Api();
  const exampleUrl = 'https://google.com';
  api.defaults.setUrl(exampleUrl);

  expect(api.defaults.getUrl()).toBe(exampleUrl);
});


test('Test Client Id', () => {
  const api = new Api({ clientId: 'clientId', clientSecret: 'clientSecret'});
  expect(api.auth.getClientID()).toBe('clientId');
});


test('Test Client Secret', () => {
  const api = new Api({ clientId: 'clientId', clientSecret: 'clientSecret'});
  expect(api.auth.getClientSecret()).toBe('clientSecret');
});
