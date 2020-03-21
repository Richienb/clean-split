"use strict"

const { default: ow } = require("ow")
const coerceRegex = require("regex-parser")
const parseRegex = require("regex-parse")
const escapeStringRegexp = require("escape-string-regexp")

module.exports = (string, delimiter, { anchor = "none" } = {}) => {
	ow(string, ow.string)
	ow(delimiter, ow.any(ow.string, ow.regExp))
	ow(anchor, ow.string.oneOf(["none", "before", "after", "left", "right"]))

	let flags = "g"

	if (typeof delimiter === "string") {
		delimiter = escapeStringRegexp(delimiter)
	} else {
		const { main, options } = parseRegex(delimiter)
		delimiter = main
		flags = options
	}

	if (anchor === "none") return string.split(coerceRegex(`/(${delimiter})/${flags}`))
	if (anchor === "before" || anchor === "left") return string.split(coerceRegex(`/(?<=(?:${delimiter}))/${flags}`))
	return string.split(coerceRegex(`/(?=(?:${delimiter}))/${flags}`))
}
