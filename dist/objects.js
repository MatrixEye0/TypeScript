let country;
country = {
    name: "India",
    capital: "New Delhi",
    population: 1400000000
};
const job = {
    title: "Software Engineer",
    salary: 100000
};
const id = { name: "Jagjit Singh", id: 2 };
const empDetail = id; // TypeScript sees empDetail as:employee because it has the same structure as employee, even though id has an extra property (id: number).
const updatedTech = (updates) => {
    // partial is a utility type in TypeScript.It takes an existing type and makes all its properties optional.
};
updatedTech({ name: "AI" }); // dono use kar sakte ho ya ek bhi kar sakte ho because partial make it optional.
const updatedTech2 = (updates) => {
    // all datatype hi dalni padegi wo bhi same data type warna error dega.
};
const tech4 = {
    name: "ML",
    launch: 2022
};
{
    name: "ML";
}
export {};
//# sourceMappingURL=objects.js.map