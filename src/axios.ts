import axios from "axios"
import type {AxiosResponse} from "axios"

interface todo{
    userid:string,
    id:number,
    title:string
}// api se jo data ayega uski type set karna

// axios.get('https://xyz.com')
// .then(response=>{
//     console.log(response.data)
// })

const fetch = async()=>{
    try{
        const response:AxiosResponse<todo>= await axios.get("https://xyz.com");
        console.log("todo",response.data);
        
    }catch (error:any){
       if(axios.isAxiosError(error)){
        console.log("axios",error.message);     
       }
       
    }
}