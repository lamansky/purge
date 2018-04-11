'use strict'

const assert = require('assert')
const purge = require('.')

describe('purge()', function () {
  it('should return the modified original array', function () {
    const arr = []
    assert.strictEqual(purge(arr), arr)
  })

  it('should remove elements from the array that satisfy the test function', function () {
    const arr = [1, 2, 3]
    purge(arr, n => n % 2 === 1)
    assert.strictEqual(arr.length, 1)
    assert.strictEqual(arr[0], 2)
  })

  it('should remove elements from the array that are contained in a blacklist', function () {
    const arr = [1, 2, 3]
    purge(arr, [3, 4, 5])
    assert.strictEqual(arr.length, 2)
    assert.strictEqual(arr[0], 1)
    assert.strictEqual(arr[1], 2)
  })

  it('should remove a particular element from the array', function () {
    const arr = [1, 2, 3]
    purge(arr, 1)
    assert.strictEqual(arr.length, 2)
    assert.strictEqual(arr[0], 2)
    assert.strictEqual(arr[1], 3)
  })

  it('should remove falsey elements if no test is specified', function () {
    const arr = [-1, 0, 1]
    purge(arr)
    assert.strictEqual(arr.length, 2)
    assert.strictEqual(arr[0], -1)
    assert.strictEqual(arr[1], 1)
  })
})
