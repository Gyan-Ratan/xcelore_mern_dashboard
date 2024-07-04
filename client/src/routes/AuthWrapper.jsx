
import { Outlet, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SetUser } from '../redux/AuthSlice';

const AuthWrapper = () => {
    const dispatch = useDispatch()
    const token = window.localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/login" />
    }

    dispatch(SetUser(JSON.parse(token)))
    return <Outlet />
}

export default AuthWrapper
