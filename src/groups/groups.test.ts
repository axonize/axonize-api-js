import Api from '../index';
import { generateID } from '../utils/id';
import { getCredentialsFromENV } from '../utils/tests';

jest.setTimeout(parseInt(process.env.testTimeout || '60000'));

const createTestGroup = () => {
  const api = new Api(getCredentialsFromENV());
  return api.groups.addGroup({name: 'jsapiclienttestgroup'});
}

test('Test getGroups method', () => {
  const api = new Api(getCredentialsFromENV());

  return api.groups.getGroups().then(groups => {
    expect(!!groups.length).toEqual(true);
  });
});

test('Test group not found', async () => {
  const api = new Api(getCredentialsFromENV());

  try {
    await api.groups.getGroup('2');
  } catch (e) {
    expect(e.statusCode).toEqual(404);
  }
});

test('Create, Update, and Delete Group', async (done) => {
  // Arrange
  const api = new Api(getCredentialsFromENV());
  const generateId = generateID();
  const testGroup = await createTestGroup();

  // Action
  const updatedGroup = await api.groups.updateGroup(testGroup.id, { info: generateId });

  // Assert
  expect(updatedGroup.info).toEqual(generateId);

  // Cleanup
  await api.groups.deleteGroup(testGroup.id);
  done();
});
