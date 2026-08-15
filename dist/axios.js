import axios from "axios";
// axios.get('https://xyz.com')
// .then(response=>{
//     console.log(response.data)
// })
const fetch = async () => {
    try {
        const response = await axios.get("https://xyz.com");
        console.log("todo", response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("axios", error.message);
        }
    }
};
//# sourceMappingURL=axios.js.map