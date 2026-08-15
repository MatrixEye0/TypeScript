//type IGame = {cricket: "bat"|"ball",} | {football: "ball"|"goalpost"}
//A type can represent: unoin , primitive, obj , tuple , function , it is more flexible tahn interface but it cannot be extended or implemented by a class
class game {
    sport = "Cricket";
    player = 11;
    win = true;
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
const test2 = {
    name() {
        "Malai Chaap";
    },
    rating() { 9; }
};
const detail = {
    Audi: 55
};
export {};
//# sourceMappingURL=interface.js.map