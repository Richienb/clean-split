"use strict"

const { default: ow } = require("ow")
const coerceRegex = require("regex-parser")
const escapeStringRegexp = require("escape-string-regexp")

// From https://github.com/IonicaBizau/regex-parser.js/blob/a5746771c0ee2e1a3ab1557905ef734c047da0d5/lib/index.js
const parseRegexp = (regexp) => {
	const matches = regexp.toString().match(/(\/?)(.+)\1([a-z]*)/i)

	return {
		main: matches[2],
		options: matches[3],
	}
}

module.exports = (string, delimiter, { anchor = "none" } = {}) => {
	ow(string, ow.string)
	ow(delimiter, ow.any(ow.string, ow.regExp))
	ow(anchor, ow.string.matches(/none|before|after|left|right/))

	let flags = "g"

	if (typeof delimiter === "string") {
		delimiter = escapeStringRegexp(delimiter)
	} else {
		const { main, options } = parseRegexp(delimiter)
		delimiter = main
		flags = options
	}

	if (anchor === "none") return string.split(coerceRegex(`/(${delimiter})/${flags}`))
	if (anchor === "before" || anchor === "left") return string.split(coerceRegex(`/(?<=(?:${delimiter}))/${flags}`))
	return string.split(coerceRegex(`/(?=(?:${delimiter}))/${flags}`))
}
