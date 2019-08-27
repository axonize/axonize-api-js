import Api from '../index';
import { getCredentialsFromENV } from '../utils/tests';

jest.setTimeout(parseInt(process.env.testTimeout || '60000'));

test('Test getLocales', () => {
  const api = new Api(getCredentialsFromENV());

  return api.locales.getLocale('en').then(locales => {
    expect(locales.msg_device).toEqual('Device');
  });
});

test('Test getLocales de', () => {
  const api = new Api(getCredentialsFromENV());

  return api.locales.getLocale('de').then(locales => {
    expect(locales.msg_device).toEqual('Gerät');
  });
});

test('Test getSupportedLanguages', () => {
  const api = new Api(getCredentialsFromENV());

  return api.locales.getSupportedLanguages().then(locales => {
    expect(!!locales.find(l => l.key === 'en')).toEqual(true);
  });
});
