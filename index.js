"use strict"

const stringSplice = require("string-splice")
const { default: is } = require("@sindresorhus/is")

module.exports = (el, find, add) => {
	if (is.string(el)) {
		if (is.string(find)) return el.replace(find, find + add)
		if (is.number(find)) return stringSplice(el, find, 0, add)
		throw new ReferenceError("The element to find is not a string or a number!")
	} else if (is.array(el)) {
		const index = el.indexOf(find)
		if (index > -1) {
			el = [...el]
			el.splice(index + 1, 0, add)
			return el
		}

		if (is.number(find)) return el.splice(find, 0, add)
		throw new ReferenceError("The element to find is not in the array or a number!")
	}

	throw new ReferenceError("Provided element is not a string or array!")
}
