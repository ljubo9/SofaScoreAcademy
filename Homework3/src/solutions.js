module.exports = {
    /**
     * Returns an empty object without prototype. There is object creation type that creates object without prototype
     */
    createPrototypelessObject() {
        let noProtObj = Object.create(null)
        return noProtObj
    },

    /**
     * Returns an object with prototype set to given `proto`.
     * @param {Object} proto Prototype object
     */
    createObjectWithPrototype(proto) {
        let protObj = Object.create(proto)
        return protObj
    },

    /**
     * Returns an object with `value` property set to the given `value` and `getValue` method.
     * Be careful, if `value` changes, `getValue` should return changed `value`.
     * @param {any} value
     */
    createObjectWithMethod(value) {
        let valueObj = {
            value: value,
            getValue: function() {
                return this.value
            }
        }

        return valueObj
    },

    /**
     * Returns an object with the `getValue` and `setValue` methods, having `value` hidden from the outside.
     */
    createEncapsulatedObject() {

        class createEncapsulatedObject {
            constructor(value) {
                this.value = value
            }

            getValue() {
                return this.value
            }

            setValue(value) {
                this.value = value
            }

        }



    },

    /**
     * Returns the shallow copy of the given `obj`. HINT: This **operator** will be used later.
     * @param {Object} obj
     */
    shallowCopy(obj) {
        let copiedObj = Object.assign({}, obj)

        return copiedObj
    },

    /**
     * Returns the deep copy of the given `obj`.
     * @param {Object} obj
     */
    deepCopy(obj) {
        let copiedObj = JSON.parse(JSON.stringify(obj))

        return copiedObj
    },

    /**
     * Returns an array containing 2 elements which are
     * loosely equal, but strictly unequal.
     */
    looselyTrue() {
        const arr = [1, '1']

        return arr
    },

    /**
     * Returns a string that is loosely equal to boolean `true`. This one is tricky :)
     */
    stringLooselyEqualToTrue() {
        let myString = "1"

        if (myString == true) {
            return myString
        }
    },

    /**
     * Returns correct sum of a and b.
     */
    safeSum(a, b) {
        if (Number(a) !== NaN && Number(b) !== NaN) {
            return Number(a) + Number(b)
        } else {
            console.log('Wrong parameters, must both be numbers')
        }
    },

    /**
     * Returns formatted string for the given date.
     * Format should be `{day}-{month}-{fullYear}` (all numbers).
     * @param {Date} date
     */
    formatDate(date) {
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        return day + '-' + month + '-' + year
    },

    /**
     * Sorts the given `numberArray` in ascending order.
     * Use array `.sort` method. Sort is done in place so there is no need to return anything.
     * @param {number[]} numberArray
     */
    sortNumberArray(numberArray) {
        numberArray.sort(function(a, b) {
            return a - b
        })
    },

    /**
     * Multiplies all the elements in the array by 2 _in place_
     * (edits the given array) and returns it.
     * @param {number[]} numberArray
     */
    multiplyArrayByTwo(numberArray) {
        for (let i = 0; i < numberArray.length; ++i) {
            numberArray[i] = numberArray[i] * 2
        }

        return numberArray
    },

    /**
     * Multiplies all the elements in the array by 2 and returns them
     * in a new array.
     * @param numberArray
     */
    multiplyArrayByTwoNew(numberArray) {
        let newNumberArray = []
        for (let i = 0; i < numberArray.length; ++i) {
            newNumberArray[i] = numberArray[i] * 2
        }

        return newNumberArray
    },

    /**
     *
     * EXTRA CREDIT TASK:
     *
     * Create two classes: `Person` and `Programmer`. `Programmer` class extends `Person`.
     * Person class has `name` property (set via constructor) and `getName` method (calls `callGetName` with name`).
     * Programmer class has `language` property provided to constructor (and `name` inherited from `Person`) and `getLanguage` method (calls `callGetLanguage` with `language`)
     * Return object with created classes, `return { Person, Programmer }`.
     *
     * NOTE: class methods should use `bind`, function expression syntax won't work here because code isn't transpiled.
     *
     * @param {Function} callGetName
     * @param {Function} callGetLanguage
     */
    classInheritance(callGetName, callGetLanguage) {
        class Person {
            constructor(name) {
                this.name = name
            }

            getName() {
                return this.callGetName(this.name)
            }

            callGetName(name) {
                return name
            }
        }

        class Programmer extends Person {
            constructor(name, language) {
                super(name)
                this.language = language
            }

            getLanguage() {
                return this.callGetLanguage(this.language)
            }

            callGetLanguage(language) {
                return language
            }
        }

        return { Person, Programmer }
    },

    /**
     * EXTRA CREDIT TASK:
     *
     * **This is variant of probably most common "big firm" interview question with closures.**
     *
     * This task has more easier solutions (e.g. using `let` instead of `var`), but desired solutions included Closures.
     *
     * Call the `consumer` function once every second three times giving it loop iterator as argument.
     * Use the provided for loop, do not change for loop, but feel free to modify setTimeout.
     * @param {Function} consumer
     */
    timeoutIncrement(consumer) {
        for (var i = 1; i <= 3; i += 1) {
            setTimeout(() => {
                consumer(i)
            }, 1000 * i)
        }
    },
}