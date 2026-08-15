//Generics allow you to write code that can work with different types while still keeping TypeScript's type safety.
function wrapArr(item) {
    return [item];
}
const firstNumber = wrapArr([10, 20, 30]);
const firstName = wrapArr(["Jagjit", "Aman", "Rahul"]);
wrapArr([{}, {}, {}]); // also write like this
// pair---------------------------------------
function pair(a, b) {
    return [a, b];
}
pair("Jagjit", "Singh");
pair("Mahima", 22);
const Nbox = { content: 9 };
const Nbox2 = { content: "A" };
const response = {
    status: 4,
    data: { accept: "yes" }
};
export {};
//# sourceMappingURL=generics.js.map