const country:string[]=["IN","USA","UK"]
const rank:Array<number>=[4,1,5]

type eco={
    sector:string;
    percent:number
}
const economy: eco[]=[
    {sector:"Agriculture", percent:25},
    {sector:"Service",percent:50}
]
economy.push({sector:"Manufacture",percent:25})

const cities: readonly (string|number)[]=["Sambhal","Amritsar","Anandpur Sahib",90]
//cities.push() not push because of readonly

// 2D array--------------------------------------------------------------------------------------------
const table: number[][]=[
    [1,2],
    [3,4]
]
    
// tuple--------------------------------
let tuple:[number,string,boolean?]
tuple=[56,"MCA"]// jis order me hai usi me datatype ayenge. boolean optional hai.

const tuple2: readonly [number,number]=[28.34,56.21]

//enum Store a fixed set of choice ---------------------------------------------------------------------------------------------------------
// Enum is useful when you have a fixed set of related values and you want TypeScript to restrict what values can be used.
enum user {
    premium,
    average,
    normal
}// by defaul value 0 se start hogi aur 1,2 chalegi if 100 se start kari to 101, 102 chalegi
const val =user.average
console.log(val)
