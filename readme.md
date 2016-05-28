# emitterer

Because the world needs more event interfaces

```js
var Store = require('emitterer')

// initial state
var store = Store({})

// call me when state changes
store(function onChange(state) {
  console.log(state)
})

// get current state
console.log(store())

store.on('data', function(action, oldState) {
  return action
})

store.emit('data', { test: 'party' })
```
