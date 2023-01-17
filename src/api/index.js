import axios from "axios";

const api = axios.create({
    baseURL: "https://todo-app-db.vercel.app"
})

const getTodos = async () => {
    try {
        const data = api.get("/todos")
        return data
    } catch (error) {
        console.log("Error ", error);
    }
}

export {
    getTodos
}