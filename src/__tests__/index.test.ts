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
