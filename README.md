# Put after [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/put-after/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/put-after)

Put an element after another element.

[![NPM Badge](https://nodei.co/npm/put-after.png)](https://npmjs.com/package/put-after)

## Install

```sh
npm install put-after
```

## Usage

```js
const putAfter = require("put-after");

putAfter("ac", "a", "b")
//=> 'abc'

putAfter(["a", "c"], "a", "b")
//=> ['a', 'b', 'c']
```

## API

### putAfter(el, find, add)

#### el

Type: `string or array`

The element to search.

#### el

Type: `string or number`

The search key. Can be a specific part of the element or an index.

#### add

Type: `any`

The element to add.

## Migrating from v1

- Minimum support version of Node.js is now 10.
