import _ from "lodash"

// splits array
export const chunk = () => {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
    return _.chunk(arr, 2);
}

// removes falsy values
export const compact = () => {
    const arr = [0, 1, 2, null, 4, undefined, 5, 6, false, "", NaN, 7, 8];
    return _.compact(arr);
}

// basically concats everything, not just array
export const concat = () => {
    const arr = [1, 2, 3];
    return _.concat(arr, 4, 5, 6, [7, 8, 9], [[10]], [[[11, 12]]]);
}

// removes common values from the first array
export const difference = () => {
    const arr1 = [5, 2, 4, 3, 1, 'x'];
    const arr2 = [1, 3, 'x'];
    return _.difference(arr1, arr2);
}

// performs function over the values before doing difference
export const differenceBy = () => {
    const arr1 = [5.1, 2.8, 4.2, 3.4, 1.7];
    const arr2 = [1.9, 3.6];
    return _.differenceBy(arr1, arr2, Math.floor);
}