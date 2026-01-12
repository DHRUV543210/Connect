import { Routes, Route } from "react-router-dom";
import SignInSignUp from "../../Components/SignInSignUp";
import LandingPage from "../../Components/LandingPage";
import Dashboard from "../../Components/Dashboard";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/accounts" element={<SignInSignUp/>}/>
        </Routes>
    )
}

export default AppRoutes;