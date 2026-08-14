"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const country = ["IN", "USA", "UK"];
const rank = [4, 1, 5];
const economy = [
    { sector: "Agriculture", percent: 25 },
    { sector: "Service", percent: 50 }
];
economy.push({ sector: "Manufacture", percent: 25 });
const cities = ["Sambhal", "Amritsar", "Anandpur Sahib", 90];
//cities.push() not push because of readonly
// 2D array--------------------------------------------------------------------------------------------
const table = [
    [1, 2],
    [3, 4]
];
// tuple--------------------------------
let tuple;
tuple = [56, "MCA"]; // jis order me hai usi me datatype ayenge. boolean optional hai.
const tuple2 = [28.34, 56.21];
//enum Store a fixed set of choice ---------------------------------------------------------------------------------------------------------
// Enum is useful when you have a fixed set of related values and you want TypeScript to restrict what values can be used.
var user;
(function (user) {
    user[user["premium"] = 0] = "premium";
    user[user["average"] = 1] = "average";
    user[user["normal"] = 2] = "normal";
})(user || (user = {})); // by defaul value 0 se start hogi aur 1,2 chalegi if 100 se start kari to 101, 102 chalegi
const val = user.average;
console.log(val);
//# sourceMappingURL=array-enum-tuples.js.map