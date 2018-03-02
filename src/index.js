// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, ({enumerable: false, get: function(){ return value;}, set: function(newVal){value = newVal;}}));
    return propertyName};
const createProtoMagicObject = () => { var a = function() {return {};}; a.prototype = a.__proto__ ; return a;};
const incrementor = (() =>  {
    var _value = 0;

    function _incrementor() {
        _value++;
        return _incrementor;
    };

   _incrementor.valueOf = function() { return _value };

    return _incrementor;
})()
;

const asyncIncrementor = () => {
    if ( typeof this.asyncIncr == 'undefined'){
        this.asyncIncr = 1;
    } else{
        this.asyncIncr++;
    }
    var value = this.asyncIncr;

    return new Promise(resolve => {
        setTimeout(() => {
        resolve(value);
    }, 10);
});};


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
const getDeepPropertiesCount = (obj) => {

    function _recursive(obj) {
        var amount = 0;
        if (obj.length != 0){
            for (key in obj){
                if (Object.getOwnPropertyNames(obj[key]).length != 0)
                {
                    amount++;
                    amount = amount + _recursive(obj[key]);
                }
                else
                {
                    amount++;
                }
            }
        } else{
            amount++;
        }
        return amount;
    }



    var amount = 0;
    for (key in obj) {
        if (Object.getOwnPropertyNames(obj[key]).length != 0)
        {
            amount++;
            amount = amount + _recursive(obj[key]);
        }
        else
        {
            amount++;
        }

    }

    return amount;


};
const createSerializedObject = () => {

    Object.defineProperty( Object.getPrototypeOf(this), "valueOf", {value: function() { return JSON.stringify(this)}, enumerable: true});
    let a = {field: "value"};
    // a.prototype = Object;

    var prototypeA = Object.getPrototypeOf(a);
  //  Object.defineProperty( Object.getPrototypeOf(this), "valueOf", {value: function() { return JSON.stringify(this)}, enumerable: true});
   // a.valueOf = function(){ return JSON.stringify(this)};


  //  Object.defineProperty(a, "valueOf", {value: function() { return JSON.stringify(this)}});

  //  debugger;
    return a;

};
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