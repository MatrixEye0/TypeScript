// Type narrowing means reducing a union type to a more specific type after checking it. use when working with APIs, React props, and backend data.

function get(id: string|number){
    if (typeof id ==='string'){
        return `id ${id} is string`;// here we use string builtin js method not other because we set condition is string
    }
    return `id ${id} is number`;// here we use only math builtin js method because we not set any condition & TypeScript has already figured out that id is a number.
}
console.log(get(4));


function get2(msg?: "good"|"bad"|"normal"){
    if (msg ==="good"){
        return `message ${msg} is good`;
    }
    if(msg ==="bad" || msg ==="normal"){
        return `message ${msg} is bad or normal`;
    }
}
console.log(get2("good"));

class user{
    name(){
        return `Jagjit Singh`;
    }
}
class user2{
    name(){
        return `Mahima Gupta`;
    }
}
function getUser(detail:user|user2){
    if (detail instanceof user){ // now we intialize which class name is used in this funtion with help of instanceof operator.
        return detail.name();
    }
}
console.log(getUser(new user));// here we use new because without new they not create object they olny create referance of class.


type cricket ={type:"pitch"; khiladi:number};
type football ={type:"ground"; players:number};
type mma ={type:"ring"; oponents:number};

type sports = cricket|football|mma;
function getSports(sport:sports){
    switch(sport.type){
        case "pitch":
            return `cricket is played on ${sport.type} with ${sport.khiladi} players`;
            break;
        case "ground":
            return `football is played on ${sport.type} with ${sport.players} players`;
            break;
        case "ring":
            return `mma is played on ${sport.type} with ${sport.oponents} players`;
            break;
    }
}
console.log(getSports({type:"pitch",khiladi:11}));

//type narrowing with help of in operator

function getSports2(sportCheck:sports){
    if ("players" in sportCheck){
        return `football is played on ${sportCheck.type} with ${sportCheck.players} players`;
  }
}
console.log(getSports2({type:"ground",players:11}));