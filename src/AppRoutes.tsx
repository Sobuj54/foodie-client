import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><span>home</span></Layout>}/>
            <Route path="/user-profile" element={<span>user profile</span>}/>
            <Route path="*" element={<Navigate to="/"/>}/> //catch all routes
        </Routes>
    );
};

export default AppRoutes;