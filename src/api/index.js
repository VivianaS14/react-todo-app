import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000"
})

const getTodos = async () => {
    try {
        const data = api.get("/todos")
        return data
    } catch (error) {
        console.log("Error ", error);
    }
}

const addTodos = async (_newData) => {
    try {
        let res = await api.post("/todos", { "content": _newData, completed: false })
        return res
    } catch (error) {
        console.log("Error ", error);
    }
}

const putTodos = async (_data, id) => {
    try {
        let res = await api.put(`/todos/${id}`, _data)
        return res
    } catch (error) {
        console.log("Error ", error);
    }
}

const deleteTodos = async (id) => {
    try {
        let res = await api.delete(`/todos/${id}`)
        return res
    } catch (error) {
        console.log("Error ", error);
    }
}

export {
    getTodos,
    putTodos,
    deleteTodos,
    addTodos
}