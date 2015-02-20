var test = require('tape')
var StateHolder = require('./')

function basic(t, state, thing) {
	t.equal(state.set(thing), thing, 'set sets and returns ' + thing)
	t.equal(state.get(), thing, 'get returns ' + thing)
}

function deep(t, state, thing) {
	t.deepEqual(state.set(thing), thing, 'set sets and returns ' + thing)
	t.deepEqual(state.get(), thing, 'get returns ' + thing)
}

test('get/set work', function (t) {
	var state = new StateHolder()

	basic(t, state, 'yeah')
	deep(t, state, { string: 'yeah' })

	t.end()
})

test('setting upon construction works', function (t) {
	var state = new StateHolder('wat')

	t.equal(state.get(), 'wat', 'get returns wat')

	basic(t, state, 'wat')
	deep(t, state, { string: 'wat' })

	t.end()
})

test('getting and setting functions work', function (t) {
	var state = new StateHolder( function (n) { return 37 + n })

	t.equal(state.get()(5), 42, 'get returns a function')
	t.equal(typeof state.get(), 'function', 'get returns a function')

	state.set( function (s) { return 'um ' + s })

	t.equal(state.get()('hi'), 'um hi', 'get returns a function')
	t.equal(typeof state.get(), 'function', 'get returns a function')

	t.end()
})

test('setting nothing sets undefined', function (t) {
	var state = new StateHolder()

	t.equal(state.get(), undefined, 'get returns undefined')

	state.set('defined')

	basic(t, state, undefined)

	t.end()
})
