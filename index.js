function myEach(collection, callback) {
    for (const key in collection) {callback(collection[key]);}
    return collection;
}
myEach([1, 2, 3], alert);


function myMap(collection, callback) {
    if (Array.isArray(collection)) {return collection.map(callback);} 
    else if (typeof collection === 'object' && collection !== null) {
      return Object.values(collection).map((value, index) => callback(value, Object.keys(collection)[index]));}
    else {return [];}
  }


function myReduce(collection, reducer, initialValue) {
    if (typeof reducer !== 'function') {
        throw new TypeError('Reducer must be a function');
    }

    if (Array.isArray(collection) && collection.length === 0 && initialValue === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    if (!Array.isArray(collection) && typeof collection !== 'object') {
        throw new TypeError('Collection must be an array or an object');
    }

    const keys = Object.keys(collection);
    let accumulator = initialValue !== undefined ? initialValue : collection[keys[0]];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < keys.length; i++) {
        const key = keys[i];
        accumulator = reducer(accumulator, collection[key], collection);
    }

    return accumulator;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {if (predicate(collection[i])) {return collection[i];}}} 
        else if (typeof collection === 'object' && collection !== null) {
        for (const key in collection) {
        if (Object.hasOwnProperty.call(collection, key)) {if (predicate(collection[key])) { return collection[key];}}}
    }
    return undefined;
}

function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {return collection.filter(predicate);}
    else if (typeof collection === 'object' && collection !== null) {
        let result = [];
        for (let key in collection) {
            if (predicate(collection[key])) {result.push(collection[key]);}
        }
        return result;
    }
    return [];
}

function mySize(collection) {
    if (Array.isArray(collection)) {return collection.length;} 
    else if (typeof collection === 'object' && collection !== null) {return Object.keys(collection).length;} 
    else {return 0; }
  }

function myFirst(array, n = 1) {
    if (n === 1) {return array[0];} 
    else {return array.slice(0, n);}
}

function myLast(array, n) {
    if (n === undefined) {return array[array.length - 1]; }
    else {return array.slice(-n);}
}

function myKeys(obj) {return Object.keys(obj);}

function myValues(object) {return Object.values(object);}
  