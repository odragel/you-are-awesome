// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, ({enumerable: false, get: function(){ return value;}, set: function(newVal){value = newVal;}}));
    return propertyName};
const createProtoMagicObject = () => { var a = new Function(); a.prototype = a.__proto__ ; return a;};
const incrementor = () =>  {
    var _value;
    if (typeof this.value == 'undefined'){
        this.value = 1;
    } else{
        this.value++;
    }

    var _value = this.value;


    function _incrementor() {
        _value++;
        this.value = _value;
        return _incrementor;
    };

    //  Object.defineProperty(_incrementor, "valueOf", {value: function() { return _value; }});
    _incrementor.valueOf = function () { return _value };

   // _incrementor.prototype = Number;

    //   var i = _incrementor();
    // console.log(_incrementor()() + 5);
    return _incrementor;



}
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

const sortByProto = (srcArr) => {
    var result = [];
    debugger;
    for(let cur of srcArr){
        if(result.length == 0){
            result.push(cur);
        } else{
            if(cur.isPrototypeOf(result[0])){
                for(var j=0 ; j < result.length; j++){
                    if(cur.isPrototypeOf(result[j])){
                        break;
                    }
                }
                if(j == result.length){
                    result.push(cur);
                } else{
                    result.splice(j, 0, cur);
                }

            } else{
                result.unshift(cur);
            }
        }
        //  if(cur.getPrototypeOf())
    }

    return result;
};

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