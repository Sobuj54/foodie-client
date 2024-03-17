import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserNameMenu from "./UserNameMenu";

const MainNav = () => {

    const {loginWithRedirect,isAuthenticated} = useAuth0();

    return (
        <div className="flex gap-2 items-center">
            {isAuthenticated ? <UserNameMenu/>: 
            <Button variant="ghost" className="text-lg font-bold hover:text-orange-500 hover:bg-white"
            onClick={()=>loginWithRedirect()}
            >
                Log In
            </Button>}
        </div>
        
    );
};

export default MainNav;