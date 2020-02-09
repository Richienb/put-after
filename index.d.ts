type ValueOf<T extends any[]> = T[number];

/**
 * Put an element after another element.
 * @param el The element to search.
 * @param find The search key. Can be a specific part of the element or an index.
 * @param add The element to add.
 * @example
 * ```
 * const putAfter = require("put-after");
 *
 * putAfter("ac", "a", "b")
 * //=> 'abc'
 *
 * putAfter(["a", "c"], "a", "b")
 * //=> ['a', 'b', 'c']
 * ```
*/
declare function putAfter(el: string, find: string | number, add: string): string;
declare function putAfter<T extends any[]>(el: T, find: ValueOf<T> | number, add: any): T;

export = putAfter;
