"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "67";
let numberLength = response.length; // forcefully asserting the type of response to string to access the length property
let user = '{"name":"Jagjit Singh","age":22,"isActive":true}';
let userobj = JSON.parse(user); // forcefully asserting the type of userobj to moreType to access its properties.
function checkUser(user) {
    if (user === "admin") {
        console.log("Admin user");
        return;
    }
    if (user === "user") {
        console.log("Normal user");
        return;
    }
    user; // here show never type because we have already checked the type of user in the above if statements. So, TypeScript knows that user can never be any other value apart from "admin" or "user".
}
function checkUser2(user2) {
    if (user === "admin") {
        console.log("Admin user");
        return;
    }
    if (user === "user") {
        console.log("Normal user");
        return;
    }
    user; // here show string on hover because guest not checked . here string other file se bhi aa skta hai.
}
//# sourceMappingURL=moreType.js.map