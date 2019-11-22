import test from "ava"
import putAfter from "."

test("main", (t) => {
    t.is(putAfter("ac", "a", "b"), "abc")
    t.deepEqual(putAfter(["a", "c"], "a", "b"), ["a", "b", "c"])
})
