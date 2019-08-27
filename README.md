# axonize-api-js
![CircleCI](https://img.shields.io/circleci/build/github/axonize/axonize-api-js.svg?style=flat-square)
![npm](https://img.shields.io/npm/dm/@axonize/api.svg?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@axonize/api.svg?style=flat-square)

## Installation

```sh
$ npm install @axonize/api
```

Or

```sh
$ yarn add @axonize/api
```

## Example Usage
```js
const {AxonizeApiClient} = require('@axonize/api');

const api = new AxonizeApiClient({clientId: YOUR_CLIENT_ID, clientSecret: YOUR_CLIENT_SECRET});

await api.devices.getDevices()
```

## Development Setup
Add a local file in the directory root '.env' to setup your [dotenv](https://github.com/motdotla/dotenv) environment variables
```
# .env
# Axonize API Client dotenv environment variables
clientId=CLIENT_ID
clientSecret=CLIENT_SECRET
internalApiKey=INTERNAL_API_KEY
apiUrl=AXONIZE_API_URL_LIKE_http://api.dev.axonize.com/
testTimeout=60000
```

## Test
```sh
$ yarn test
```
