
var dataProps = require('./')
var assert = require('assert')

var props = {
  wow: 1,
  cool: 2,
  'data-meow': 3,
  'data-awesome': true
}

var expected = {
  'data-meow': 3,
  'data-awesome': true
}

assert.deepEqual(dataProps(props), expected)
console.log('wow. such spec. very pass.')
