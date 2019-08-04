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

## Setup
Add a local file in the directory root '.env' to setup your [dotenv](https://github.com/motdotla/dotenv) environment variables
```
# .env
# Axonize API Client dotenv environment variables
clientId=CLIENT_ID
clientSecret=CLIENT_SECRET
deviceID=A_DEVICE_ID
```

## Test
```sh
$ yarn test
```