# purge

Mutates an array by filtering out elements in-place.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i purge
```

## API

The module exports a single function.

### Parameters

1. Bindable: `arr` (array): The array to modify.
2. Optional: `test` (function, array, or any): Specifies the elements to be removed. (Note that this behavior is opposite that of `Array.prototype.filter()`, which asks you to specify elements to keep.) If a function is provided, it will be called for each array element. Elements for which the function returns true will be removed. If a blacklist array is provided, elements contained in the blacklist array will be removed from `arr`. In other cases, elements in `arr` which strictly equal `test` will be removed. If `test` is omitted entirely, then `arr` will be purged of falsey elements.

### Return Value

The mutated `arr`.

## Examples

### Purge by Function Test

```javascript
const purge = require('purge')

const isOdd = n => n % 2 === 1
const arr = [1, 2, 3]
purge(arr, isOdd) // Purge odd numbers
arr // [2]
```

### Purge by Blacklist Array

```javascript
const purge = require('purge')

const arr = [1, 2, 3]
purge(arr, [3, 4, 5]) // Purge any of these elements if found
arr // [1, 2]
```

### Purge Specific Element

```javascript
const purge = require('purge')

const arr = [1, 2, 3]
purge(arr, 1) // Purge this element if found
arr // [2, 3]
```

### Purge Falsey Elements

```javascript
const purge = require('purge')

const arr = [-1, 0, 1]
purge(arr)
arr // [-1, 1]
```

### Bind Operator

This module supports the [bind operator](https://babeljs.io/blog/2015/05/14/function-bind). Any of the above examples can be rewritten to use it.

```javascript
const purge = require('purge')

const isOdd = n => n % 2 === 1
const arr = [1, 2, 3]
arr::purge(isOdd)
arr // [2]
```

## Related

* [ltrim-array](https://github.com/lamansky/ltrim-array): Removes specified values from the beginning of an array.
* [rtrim-array](https://github.com/lamansky/rtrim-array): Removes specified values from the end of an array.
* [unique-array-by](https://github.com/lamansky/unique-array-by): Filters an array by testing uniqueness with a callback, an index, or a key.
