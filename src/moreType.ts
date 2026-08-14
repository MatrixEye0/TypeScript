let response :any ="67"
let numberLength : number =(response as string).length // forcefully asserting the type of response to string to access the length property

type moreType = {
    name: string,
    age: number,
    isActive: boolean
}
let user ='{"name":"Jagjit Singh","age":22,"isActive":true}'
let userobj = JSON.parse(user) as moreType // forcefully asserting the type of userobj to moreType to access its properties.
// JSoN.parse() returns any type by default, so we need to assert the type to moreType to access its properties without TypeScript errors.
// JSON.parse() used to convert a JSON string into a object. It takes a string as input and returns an object. 


//-----------------------------------------------------------------------------------------------------------------------------------
//const inputElement = document.getElementById("input") as HTMLInputElement
// forcefully asserting the type of inputElement to HTMLInputElement to access its value property.
//------------------------------------------------------------------------------------------------------------------------------------

type check = "admin"|"user"
function checkUser(user:check):void{
    if(user === "admin"){
        console.log("Admin user");
        return;
    }
    if(user === "user"){
        console.log("Normal user");
        return;
    }
    user;// here show never type because we have already checked the type of user in the above if statements. So, TypeScript knows that user can never be any other value apart from "admin" or "user".
}

type check2 = "admin"|"user"|"guest"
function checkUser2(user2:check):void{
    if(user === "admin"){
        console.log("Admin user");
        return;
    }
    if(user === "user"){
        console.log("Normal user");
        return;
    }
    user;// here show string on hover because guest not checked . here string other file se bhi aa skta hai.
}