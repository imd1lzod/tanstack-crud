import { useQuery } from "@tanstack/react-query"
import { getAllUsers } from "../api/users"
import type { UserTypes } from "../types/interfaces"

export const useGetAllUsers = () => {
    return useQuery<UserTypes[]>({
        queryFn: getAllUsers,
        queryKey: ['Users']
    })
}