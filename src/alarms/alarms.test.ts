import Api from '../index';
import { generateID } from '../utils/id';
import { getCredentialsFromENV } from '../utils/tests';

jest.setTimeout(parseInt(process.env.testTimeout || '60000'));

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

const createTestAlarm = async () => {
  const api = new Api(getCredentialsFromENV());
  return api.alarms.addAlarm({});
}

test('Create and Delete Alarm', async (done) => {
  // Arrange
  const api = new Api(getCredentialsFromENV());

  // Action
  const testAlarm = await createTestAlarm();

  // Assert
  expect(testAlarm).toHaveProperty('id');

  // Cleanup
  await api.alarms.deleteAlarm(testAlarm.id);
  done();
})

test('Update alarm', async (done) => {
  // Arrange
  const api = new Api(getCredentialsFromENV());
  const testAlarm = await createTestAlarm();
  const generateId = generateID();

  // Action
  const updatedAlarm = await api.alarms.updateAlarm(testAlarm.id, { message: generateId });

  // Assert
  expect(updatedAlarm.message).toEqual(generateId);

  // Cleanup
  await api.alarms.deleteAlarm(testAlarm.id);
  done();
});
