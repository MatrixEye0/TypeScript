//Generics allow you to write code that can work with different types while still keeping TypeScript's type safety.

function wrapArr<T>(item:T):T[]{
    return [item]
}
const firstNumber = wrapArr([10, 20, 30]);
const firstName = wrapArr(["Jagjit", "Aman", "Rahul"]);
 wrapArr([{},{},{}]); // also write like this

// pair---------------------------------------

function pair<A,B> (a:A, b:B){
    return [a,b]
}
pair("Jagjit","Singh")
pair("Mahima",22)

// generic interface------------------

interface box<R> {
    content:R // content property must have the same type that we give to R.
}
const Nbox: box<number>={ content:9}
const Nbox2: box<string>={ content:"A"}

//--------------------------------------------------------------------------------

interface Api<T> {
    status:number,
    data:T
}
const response:Api<{accept:string}>={ // define here what datatype of T.
  status:4,
  data:{accept:"yes"}
}