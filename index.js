"use strict"

const is = require("@sindresorhus/is")
const NamedRegExp = require("named-regexp-groups")

const parseRegexp = (regexp) => regexp.match(new NamedRegExp("/(?<main>.+)/(?<options>.*)")).groups

module.exports = (string, delimiter, { anchor = "none" } = {}) => {
	if (!is.string(string)) throw new TypeError("`string` must be a string!")
	let toMatch
	let flags = "g"
	if (is.string(delimiter)) {
		toMatch = delimiter
	} else if (is.regexp(delimiter)) {
		const { main, options } = parseRegexp(delimiter)
		flags = options
		toMatch = main
	} else {
		throw new TypeError("`delimiter`, must be a string or regexp!")
	}
	if (anchor === "none") return string.match(new RegExp(`(?:${toMatch})|[^(?:${toMatch})]+`, flags))
	else if (anchor === "right") return string.split(new RegExp(`(?=(?:${delimiter}))`, flags))
}
