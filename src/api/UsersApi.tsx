import { useMutation } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0Id : string;
    email: string;
};

export const useCreateUser = ()=>{
    const createMyUserRequest = async(user: CreateUserRequest) =>{
            const res = await fetch(`${API_BASE_URL}/api/v1/users/create-user`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(user)
            });

            if(!res.ok){
                throw new Error("Failed to create new user");
            }
    };

    const {mutateAsync: createUser, isPending, isError, isSuccess} = 
    useMutation({mutationFn :createMyUserRequest});

    return {
        createUser, isPending, isError, isSuccess
    }
}