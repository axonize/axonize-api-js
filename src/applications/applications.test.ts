
import Api from '../index';
import { generateID } from '../utils/id';
import { getCredentialsFromENV } from '../utils/tests';

jest.setTimeout(parseInt(process.env.testTimeout || '60000', 10));

test('Test getApplications method', () => {
  const api = new Api(getCredentialsFromENV());

  return api.applications.getApplications().then(apps => {
    expect(!!apps.length).toEqual(true);
  });
});

test('Test application not found', async () => {
  const api = new Api(getCredentialsFromENV());

  try {
    await api.applications.getApplication('2');
  } catch (e) {
    expect(e.statusCode).toEqual(404);
  }
});

// ! Those test not working because the API 

// const createTestApplication = async () => {
//   const api = new Api(getCredentialsFromENV());

//   const apps = await api.applications.getApplications();

//   const name = `jsapiclienttest-${generateID()}`;

//   // console.log({lineCode: generateID(),
//   //   name,
//   //   tenantId: apps[0].tenantId,})
//   const newApp = await api.applications.addApplication({
//     lineCode: generateID(),
//     name,
//     tenantId: apps[0].tenantId,
//   });

//   return newApp;
// };

// test('Create and Delete Application', async done => {
//   // Arrange
//   const api = new Api(getCredentialsFromENV());

//   // Action
//   const testApplication = await createTestApplication();

//   // Assert
//   expect(testApplication).toHaveProperty('id');

//   console.log(testApplication)

//   // Cleanup
//   await api.applications.deleteApplication(testApplication.id);
//   done();
// });

// test('Update application', async done => {
//   // Arrange
//   const api = new Api(getCredentialsFromENV());
//   const testApplication = await createTestApplication();
//   const generateId = generateID();

//   // Action
//   const updatedApplication = await api.applications.updateApplication(testApplication.id, { message: generateId });

//   // Assert
//   expect(updatedApplication.message).toEqual(generateId);

//   // Cleanup
//   await api.applications.deleteApplication(testApplication.id);
//   done();
// });
