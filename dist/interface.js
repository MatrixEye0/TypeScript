"use strict";
//type IGame = {cricket: "bat"|"ball",} | {football: "ball"|"goalpost"}
//A type can represent: unoin , primitive, obj , tuple , function , it is more flexible tahn interface but it cannot be extended or implemented by a class
Object.defineProperty(exports, "__esModule", { value: true });
class game {
    constructor() {
        this.sport = "Cricket";
        this.player = 11;
        this.win = true;
    }
}
const person = {
    name: "Jagjit",
    language: "JavaScript",
    years: 2
};
const test = {
    name: "Jagjit",
    course: "TypeScript"
};
test.course = "JavaScript"; // This is allowed because 'course' is not readonly
//test.name="Jagjit Singh" // This will throw an error because 'name' is readonly
//# sourceMappingURL=interface.js.map