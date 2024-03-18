import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./Pages/HomePage";
import AuthCallbackPage from "./Pages/AuthCallbackPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><HomePage/></Layout>}/>
            <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
            <Route path="/user-profile" element={<span>user profile</span>}/>
            <Route path="*" element={<Navigate to="/"/>}/> //catch all routes
        </Routes>
    );
};

export default AppRoutes;