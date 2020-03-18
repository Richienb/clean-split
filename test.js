const test = require("ava")
const cleanSplit = require(".")

test("basic usage", (t) => {
	t.deepEqual(cleanSplit("a-b-c", "-"), ["a", "-", "b", "-", "c"])
})

test("basic regex usage", (t) => {
	t.deepEqual(cleanSplit("a-b-c", /-/g), ["a", "-", "b", "-", "c"])
})

test("custom anchors", (t) => {
	t.deepEqual(cleanSplit("a-b-c", "-", { anchor: "none" }), ["a", "-", "b", "-", "c"])

	t.deepEqual(cleanSplit("a-b-c", "-", { anchor: "before" }), ["a-", "b-", "c"])
	t.deepEqual(cleanSplit("a-b-c", "-", { anchor: "left" }), ["a-", "b-", "c"])

	t.deepEqual(cleanSplit("a-b-c", "-", { anchor: "after" }), ["a", "-b", "-c"])
	t.deepEqual(cleanSplit("a-b-c", "-", { anchor: "right" }), ["a", "-b", "-c"])
})

test("custom anchors with regex", (t) => {
	t.deepEqual(cleanSplit("a-b-c", /-/g, { anchor: "none" }), ["a", "-", "b", "-", "c"])

	t.deepEqual(cleanSplit("a-b-c", /-/g, { anchor: "before" }), ["a-", "b-", "c"])
	t.deepEqual(cleanSplit("a-b-c", /-/g, { anchor: "left" }), ["a-", "b-", "c"])

	t.deepEqual(cleanSplit("a-b-c", /-/g, { anchor: "after" }), ["a", "-b", "-c"])
	t.deepEqual(cleanSplit("a-b-c", /-/g, { anchor: "right" }), ["a", "-b", "-c"])
})
