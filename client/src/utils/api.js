import axios from "axios"

const BASE_URL = axios.create({baseURL:"http://localhost:8000/api/v1"});

async function getNews(searchText) {
    try {
        const res= await BASE_URL.get("/news/get" + searchText)
        if(res.data.status === "ok"){
            return {error:"false" , data: res.data.articles}
        }else{
            return {error:"true" , data: "Unkown Error"}
            
        }
    } catch (error) {
        return {error:"true" , data:"Error"}
    }
}
export  {getNews};