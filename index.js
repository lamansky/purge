'use strict'

const ffn = require('ffn')
const supportBindOperator = require('sbo')

module.exports = supportBindOperator(function purge (arr, test = x => !x) {
  test = ffn(test)
  let i = 0
  let j = 0
  while (i < arr.length) {
    if (!test(arr[i])) arr[j++] = arr[i]
    i++
  }
  arr.length = j
  return arr
})
