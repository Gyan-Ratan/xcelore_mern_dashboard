import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthWrapper from "./AuthWrapper"
import UserTable from "../Table/UserTable"
import Login from "../pages/Login"
import Register from "../pages/Register"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthWrapper />}>
                    <Route element={<UserTable />} path="/" />
                </Route>
                
                <Route element={<Login />} path="/login" />
                <Route element={<Register />} path="/register" />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes
