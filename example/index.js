var Store = require('../')

// initial state
var store = Store({})

// call me when state changes
store(function onChange(state) {
  console.log(state)
})

// get current state
console.log(store())

// return an object that will xtend `oldState`
store.on('data', function(action, oldState) {
  return action
})

// pass something to the 'data' listener
store.emit('data', { test: 'party' })

