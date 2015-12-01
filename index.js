var ops = require('ndarray-ops')
var zeros = require('zeros')

module.exports = repack

function repack (color, alpha) {
  var output = zeros([color.shape[0], color.shape[1], 4])

  ops.assign(rgb(output), rgb(color))
  ops.assign(channel(output, 3), channel(alpha, 0))

  return output
}

function rgb (data) {
  return data.hi(data.shape[0], data.shape[1], 3)
}

function channel (data, i) {
  return data.pick(null, null, i)
}
