"use strict"

const stringSplice = require("string-splice")
const _ = require("lodash")

module.exports = (el, find, add) => {
    if (_.isString(el)) {
        if (_.isString(find)) return el.replace(find, find + add)

        if (_.isNumber(find)) return stringSplice(el, find, 0, add)

        throw new ReferenceError("The element to find is not a string or a number!")
    } else if (_.isArray(el)) {
        const index = el.indexOf(find)
        if (index > -1) {
            el = _.clone(el)
            el.splice(index + 1, 0, add)
            return el
        }

        if (_.isNumber(find)) return el.splice(find, 0, add)

        throw new ReferenceError("The element to find is not in the array or a number!")
    } else throw new ReferenceError("Provided element is not a string or array!")
}
