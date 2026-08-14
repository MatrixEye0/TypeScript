//type IGame = {cricket: "bat"|"ball",} | {football: "ball"|"goalpost"}
//A type can represent: unoin , primitive, obj , tuple , function , it is more flexible tahn interface but it cannot be extended or implemented by a class

//An interface in TypeScript is used to define the structure/shape of an objec

interface IGame  {
    sport:string,
    player:number,
    win: boolean
} 
class game implements IGame {
    sport="Cricket";
    player=11;
    win= true
}


//interface can be extended to create a new interface
interface User {
    name: string;
}
interface Admin extends User {
    role: string;
}

// intersection declare multiple times 
interface User {
    name: string;
}
interface User {
    age: number;
}

// intersection 
type User2 = {
    name: string;
};
type Developer = {
    language: string;
};
type Experience = {
    years: number;
};

type DeveloperUser = User2 & Developer & Experience;
const person: DeveloperUser = {
    name: "Jagjit",
    language: "JavaScript",
    years: 2
};

// readonly property once set cannot be changed
type user3={
    readonly name: string;
    course:string;
}
const test:user3={
    name:"Jagjit",
    course:"TypeScript"
}
test.course="JavaScript" // This is allowed because 'course' is not readonly
//test.name="Jagjit Singh" // This will throw an error because 'name' is readonly