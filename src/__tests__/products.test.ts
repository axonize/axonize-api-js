import Api from '../index';
import { generateID } from '../utils/id';
import { getCredentialsFromENV } from "../utils/tests";

test('Test getProducts method', () => {
  const api = new Api(getCredentialsFromENV());

  return api.products.getProducts().then(products => {
    expect(!!products.length).toEqual(true);
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

test('Update product', async () => {
  const api = new Api(getCredentialsFromENV());

  const products = await api.products.getProducts();
  const product = products[0];
  const generateId = generateID();

  const updatedDevice = await api.products.updateProduct(product.id, { libraryTestProperty: generateId });
  expect(updatedDevice.libraryTestProperty).toEqual(generateId);
});