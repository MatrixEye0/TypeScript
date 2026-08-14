"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// they make variable with two types with help of union type 
let count = '4';
console.log(count);
// use in apis like this
let api = 'success';
// if now anyone want to assign any other value to api apart from pending,success,reject then it will give error
api = 'pending'; // valid
// api ='error';// invalid becuse error not part of union.
console.log(api);
//any type is used when we don't know the type of variable at compile time. It can be any type like string, number, boolean, object etc.
const orders = [3, 5, 2, 7, 10];
let orderstatus = [];
for (let order of orders) {
    if (order > 5) {
        orderstatus.push(order);
    }
}
console.log(orderstatus);
// unknown -> It can store any type of value, but before using it, you must check its type. 
// but in any they story any type and not check the type before using it 
let value;
value = "Jagjit";
value = 22;
value = true;
value.toUpperCase(); // no error because any type can be used without type checking
let newvalue;
newvalue = "Jagjit";
newvalue = 22;
newvalue = true;
// newvalue.toUpperCase(); error because unknown type cannot be used without type checking
if (typeof newvalue === 'string') {
    newvalue.toUpperCase(); // no error because we have checked the type of newvalue before using it
}
//# sourceMappingURL=union-any.js.map