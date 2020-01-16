/**
 * Cleanly split a string by retaining the delimiter.
 * @param string The string to split.
 * @param delimiter The delimiter to split the string by.
 * @param options Extra options.
 * @example
 * ```
 * const cleanSplit = require("clean-split");
 *
 * cleanSplit("a-b-c", "-");
 * //=> ["a", "-", "b", "-", "c"]
 *
 * cleanSplit("a-b-c", "-", { anchor: "before" })
 * //=> ["a-", "b-", "c"]
 *
 * cleanSplit("a-b-c", "-", { anchor: "after" })
 * //=> ["a", "-b", "-c"]
 * ```
*/
declare function cleanSplit(string: string, delimiter: string | RegExp, options?: {
	/** Anchor the delimiter to different sides of the split. */
	anchor?: "none" | "before" | "after" | "left" | "right"
}): string[]

export = cleanSplit
