import { useGetCurrentUser, useUpdateUser } from "@/api/UsersApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
    const {currentUser, isLoading} = useGetCurrentUser();
    const {updateUser, isPending} = useUpdateUser();

    if(isLoading){
        return <span>Loading...</span>
    }

    if(!currentUser){
        return <span>Unable to load current user!!</span>
    }

    return (
        <UserProfileForm currentUser={currentUser} onSubmit={updateUser} isLoading={isPending}/>
    );
};

export default UserProfilePage;