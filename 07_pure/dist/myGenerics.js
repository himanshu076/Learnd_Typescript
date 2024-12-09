"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
// this is not a good idea to use "any" instead use "Type".
function identityTwo(val) {
    return val;
}
// in this case using "Type" which is any type and taking any value but return only number autometicaly if vslue is num & if value is string then it returns string type automaticaly.
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("hitesh");
identityThree(true);
// it is a shorter version of above Type.
function identityFour(val) {
    return val;
}
// This is generic so we can create own types.
// identityFour<Bootle>({})
// as it is type of array then we can not return single value like "3" instead need to return at leat a part of an arrray.
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
// here <T,> the use of comma is indicate that it is not a JSX syntex rather a syntex for generic specifically in React.
const getMoreSearchProducts = (productds) => {
    // do some database operations
    const myIndex = 4;
    return productds[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
