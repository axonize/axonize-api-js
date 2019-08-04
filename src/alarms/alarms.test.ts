import Api from '../index';
import { generateID } from '../utils/id';
import { getCredentialsFromENV } from '../utils/tests';

test('Test getAlarms method', () => {
  const api = new Api(getCredentialsFromENV());

  return api.alarms.getAlarms().then(alarms => {
    expect(!!alarms.length).toEqual(true);
  });
});

test('Test alarm not found', async () => {
  const api = new Api(getCredentialsFromENV());

  try {
    await api.alarms.getAlarm('2');
  } catch (e) {
    expect(e.statusCode).toEqual(404);
  }
});

test('Update alarm', async () => {
  const api = new Api(getCredentialsFromENV());

  const alarms = await api.alarms.getAlarms();
  const alarm = alarms[0];
  const generateId = generateID();

  const updatedAlarm = await api.alarms.updateAlarm(alarm.id, { message: generateId });
  expect(updatedAlarm.message).toEqual(generateId);
});
