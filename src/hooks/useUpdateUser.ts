import { useMutation } from "@tanstack/react-query"
import type { UserTypes } from "../types/interfaces"
import { updateUser } from "../api/users"

export const useUpdateUser = () => {
    return useMutation({
        mutationFn: (newUser: UserTypes) => updateUser(newUser)
    })
}