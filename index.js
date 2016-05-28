var xtend = require('xtend')

module.exports = Store

function Store(state) {
  state = state || {}
  var onChange = function() {}

  var listeners = {}

  function bus(onCh) {
    if (onCh) {
      onChange = onCh
      return
    }

    return xtend(state)
  }

  bus.on = function(event, fn) {
    listeners[event] = fn
    return bus
  }

  bus.emit = function(event, data) {
    if (!listeners[event]) return
    var newState = listeners[event](data, state)
    state = xtend(state, newState)
    onChange(state)
    return bus
  }

  return bus

}
