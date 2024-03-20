import { useUpdateUser } from "@/api/UsersApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {

    const {updateUser, isPending} = useUpdateUser();

    return (
        <UserProfileForm onSubmit={updateUser} isLoading={isPending}/>
    );
};

export default UserProfilePage;