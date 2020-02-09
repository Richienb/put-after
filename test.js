const test = require("ava")
const putAfter = require(".")

test("main", (t) => {
	t.is(putAfter("ac", "a", "b"), "abc")
	t.deepEqual(putAfter(["a", "c"], "a", "b"), ["a", "b", "c"])
})
