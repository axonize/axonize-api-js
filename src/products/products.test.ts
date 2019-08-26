import Api from '../index';
import { generateID } from '../utils/id';
import { getCredentialsFromENV } from '../utils/tests';

const createTestProduct = async () => {
  const api = new Api(getCredentialsFromENV());
  return api.products.addProduct({name: 'testproductjsapiclient'});
}

test('Test getProducts method', () => {
  const api = new Api(getCredentialsFromENV());

  return api.products.getProducts()
    .then(products => {
    expect(products.length).toBeGreaterThan(1);
  });
});

test('Test product not found', async () => {
  const api = new Api(getCredentialsFromENV());

  try {
    await api.products.getProduct('2');
  } catch (e) {
    expect(e.statusCode).toEqual(404);
  }
});

test('Update product', async (done) => {
  // Arrange
  const api = new Api(getCredentialsFromENV());
  const generateId = generateID();
  const testProduct = await createTestProduct();

  // Action
  const updatedProduct = await api.products.updateProduct(testProduct.id, { libraryTestProperty: generateId });

  // Assert
  expect(updatedProduct.libraryTestProperty).toEqual(generateId);

  // Cleanup
  await api.products.deleteProduct(testProduct.id);
  done();
});

test('Attach Schema Definition to a Product', async (done) => {
  // Arrange
  const api = new Api(getCredentialsFromENV());
  const generatedId = generateID();
  const testProduct = await createTestProduct();

  // Action
  const updatedProduct = await api.products.updateProduct(testProduct.id, { schemaDefinitionsId: generatedId });

  // Assert
  expect(updatedProduct.libraryTestProperty).toEqual(generatedId);

  // Cleanup
  await api.products.deleteProduct(testProduct.id);
  done();
});