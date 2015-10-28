'use strict'

function dataProps (props) {
  var result = { }
  for (var i in props) {
    if (/^data-/.test(i)) {
      result[i] = props[i]
    }
  }
  return result
}

module.exports = dataProps
