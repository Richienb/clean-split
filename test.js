import test from "ava"
import cleanSplit from "."

test("basic usage", (t) => {
	t.deepEqual(cleanSplit("a-b-c", "-"), ["a", "-", "b", "-", "c"])
})

test("custom anchors", (t) => {
	t.deepEqual(cleanSplit("a-b-c", "-", { anchor: "none" }), ["a", "-", "b", "-", "c"])
	t.deepEqual(cleanSplit("a-b-c", "-", { anchor: "before" }), ["a-", "b-", "c"])
	t.deepEqual(cleanSplit("a-b-c", "-", { anchor: "after" }), ["a", "-b", "-c"])
})
