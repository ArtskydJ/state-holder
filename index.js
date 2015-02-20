module.exports = function StateHolder(thing) {
	return {
		get: function get() { return thing },
		set: function set(x) { return thing = x }
	}
}
