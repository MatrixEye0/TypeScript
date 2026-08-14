let country:{
    name: string;
    capital: string;
    population: number;
}
country={
    name:"India",
    capital:"New Delhi",
    population: 1400000000
}

type item={name:string , cost:number}
type company={manufacture:string, location:string}
type  detail={
    id:number;
    item:item[]//item must be an array containing Item objects.
    company:company[]
}


// structural typing in typescript. ts checks the structure of an object, not just its type name.
type jobs={
    title: string;
    salary: number;
}
const job:jobs={
    title:"Software Engineer",
    salary: 100000
}

type employee={ name: string;} 
const id ={name:"Jagjit Singh" ,id:2}
const empDetail:employee=id // TypeScript sees empDetail as:employee because it has the same structure as employee, even though id has an extra property (id: number).

// partial -----------------------------------------------------------
type tech ={
    name:string;
    use : string;
}
const updatedTech= (updates:Partial<tech>)=>
{
   // partial is a utility type in TypeScript.It takes an existing type and makes all its properties optional.
}
updatedTech({name:"AI"})// dono use kar sakte ho ya ek bhi kar sakte ho because partial make it optional.

//required --------------------------------------------------------
type tech2 ={
    name:string;
    use : string;
}
const updatedTech2= (updates:Required<tech2>)=>{
    // all datatype hi dalni padegi wo bhi same data type warna error dega.
}


// pick ----------------------------------------------------
type tech3 ={
    name:string;
    use : string;
    launch: number;
}
type updatedTech3= Pick<tech3, "name"|"launch">;// we select datatype which i want for work 
const tech4:updatedTech3={
    name:"ML",
    launch:2022
}

// omit use for hide some obj property ----------------------------------
type tech5 ={
    name:string;
    use : string;
    launch: number;
}
type updatedTech5= Omit<tech5,"launch">;{
    name:"ML"
}