import { useMutation } from "@tanstack/react-query"
import { deleteUser } from "../api/users"

export const useDeleteUser = () => {
    return useMutation({
        mutationFn: (id: number | string) => deleteUser(id)
    })
}