import { useMutation } from "@tanstack/react-query"
import { createUser } from "../api/users"
import type { UserTypes } from "../types/interfaces"

export const useCreateUser = () => {
    return useMutation<UserTypes[], Error, UserTypes>({
        mutationFn: (user: UserTypes) => createUser(user)
    })
}