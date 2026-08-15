class tech {
    name;
    use;
    constructor(name, use) {
        this.name = name,
            this.use = use;
    }
}
const newTech = new tech("AI", "automation");
newTech.name = "Artificial Intelligence"; // modify here because we not use readonly
// publib private =================================================================================
class weapon {
    name = "SatanII Missile"; // anone can access
    technologyUse = "MIRV"; // not anyone access . access only by method.
    revel() {
        return this.technologyUse; // only access inside class
    }
    developer = "Jagjit Singh";
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
export {};
//# sourceMappingURL=opps.js.map