// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, ({enumerable: false, get: function(){ return value;}, set: function(newVal){value = newVal;}}));
    return propertyName};
const createProtoMagicObject = () => { var a = new Function(); a.prototype = a.__proto__ ; return a;};
const incrementor = () =>  {}
;

const asyncIncrementor = () => {};
const createIncrementer = () => {
    var value = 0;
    return {
        next() {
            return {value: ++value , done: false};
        },
        [Symbol.iterator]() { return this; }
    }
};


// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (argument) => {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve(argument);
}, 1000);
});};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => (new Object(1));
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;