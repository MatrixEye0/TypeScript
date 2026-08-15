"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class tech {
    constructor(name, use) {
        this.name = name,
            this.use = use;
    }
}
const newTech = new tech("AI", "automation");
newTech.name = "Artificial Intelligence"; // modify here because we not use readonly
// publib private =================================================================================
class weapon {
    constructor() {
        this.name = "SatanII Missile"; // anone can access
        this.technologyUse = "MIRV"; // not anyone access . access only by method.
        this.developer = "Jagjit Singh";
    }
    revel() {
        return this.technologyUse; // only access inside class
    }
    get techUse() {
        return this.technologyUse;
    }
    set techUse(value) {
        if (value === "Jagjit") {
            throw new Error("error");
        }
        this.technologyUse = value; // It allows you to change the private technologyUse property through a controlled method.
    }
}
class weapon2 extends weapon {
    getName() {
        return this.developer; // protected acces by here by originaal class and Classes that extend the original class 
    }
}
const check = new weapon();
const ans = check.name;
const ans2 = check.techUse;
console.log(ans);
console.log(ans2);
//# sourceMappingURL=opps.js.map