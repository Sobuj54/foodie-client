import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav = () => {

    const {loginWithRedirect} = useAuth0();

    return (
        <Button variant="ghost" className="text-lg font-bold hover:text-orange-500 hover:bg-white"
        onClick={()=>loginWithRedirect()}
        >
            Log In
        </Button>
    );
};

export default MainNav;