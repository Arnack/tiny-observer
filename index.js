'use strict';

/**
 * Function to make Objects observable
 * @param objToWatch - an Object or to make it observable
 * @param callback - callback function with these arguments:
 * property - a property which was changed or added,
 * value - a new value of the changed property,
 * previous - an old value of the property
 *
 * @returns observable Object
 */
const observe = (objToWatch, callback) => {
    const handler = {
        //value changing and rearranging
        set(target, property, value, receiver) {

            const previous = Reflect.get(target, property, receiver);
            //a new property added or a property was changed
            if (!previous || previous !== value) { 
                callback(property, value, previous);
            }

            return Reflect.set(target, property, value);
        }
    };
    return new Proxy(objToWatch, handler);
};

module.exports = observe;