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
//# sourceMappingURL=union-any.js.map