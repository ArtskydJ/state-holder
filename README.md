state-holder
============

[![Build Status](https://travis-ci.org/ArtskydJ/state-holder.svg)](https://travis-ci.org/ArtskydJ/state-holder)

Basic getter and setter for arbitrary data

# source code
I think the best way to describe this module is to show you its source code:

```js
module.exports = function StateHolder(thing) {
	return {
		get: function get() { return thing },
		set: function set(x) { return thing = x }
	}
}
```

That's it! Short and sweet!

# example

And a quick example of how to use it:

```js
var StateHolder = require('state-holder')

var state = StateHolder( 'hello' )
state.get() // => 'hello'

state.set() // => undefined
state.get() // => undefined

state.set('world') // => 'world'
state.get() // => 'world'
```

# api

```js
var StateHolder = require('state-holder')
```

## var state = StateHolder( [thing] )

Can be called with or without `new`.

The state is be set to the value of `thing`. If `thing` is omitted, the state is set to `undefined`.

## var thing = state.get()

Returns the state.

## state.set( [thing] )

The state is be set to the value `thing`. If `thing` is omitted, the state is be set to `undefined`. Whatever the state ends up being set to is returned.


# install

```bash
npm install state-holder
```

# license

[VOL](http://veryopenlicense.com)
