import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<span>home</span>}/>
            <Route path="/user-profile" element={<span>user profile</span>}/>
            <Route path="*" element={<Navigate to="/"/>}/> //catch all routes
        </Routes>
    );
};

export default AppRoutes;