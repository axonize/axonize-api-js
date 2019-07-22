import Api from '../index';
import { generateID } from '../utils/id';
import { getCredentialsFromENV } from '../utils/tests';

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

test('Update product', async () => {
  const api = new Api(getCredentialsFromENV());

  const groups = await api.groups.getGroups();
  const group = groups[0];
  const generateId = generateID();

  const updatedGroup = await api.groups.updateGroup(group.id, { info: generateId });
  expect(updatedGroup.info).toEqual(generateId);
});
