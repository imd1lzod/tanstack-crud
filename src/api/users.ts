import axios from "axios"
import type { UserTypes } from "../types/interfaces"

export const getAllUsers = async () => {
    try {
        const res = await axios.get('https://6883290921fa24876a9cea38.mockapi.io/users')
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const createUser = async (newUser: UserTypes) => {
    try {
        const res = await axios.post("https://6883290921fa24876a9cea38.mockapi.io/users", newUser)
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteUser = async (id: number | string) => {
    try {
        const res = await axios.delete(`https://6883290921fa24876a9cea38.mockapi.io/users/${id}`)
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}

export const updateUser = async (newUser: UserTypes) => {
    try {
        const res = await axios.put(`https://6883290921fa24876a9cea38.mockapi.io/users/${newUser.id}`, newUser)
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}