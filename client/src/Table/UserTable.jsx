import { useState } from 'react'
import Table from '../Component/Table'
import AddUser from '../Component/AddUser'
import UpdatedUser from '../Component/UpdatedUser'
import DeletUser from '../Component/DeletUser'
import toast from 'react-hot-toast'
import { put, deleteUser } from '../services/ApiEndpoint'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from '../redux/UserSlice'
import { Navigate } from 'react-router-dom'


export default function UserTable() {
    const user = useSelector(state => state.Auth.user);
    const dispatch = useDispatch()
    const [userId, setUserId] = useState()
    const [value, setValue] = useState({
        name: '',
        email: '',
        phone: '',
        role: ''
    })

    if (!user) return <Navigate to="/login" />

    const deletuser = (userid) => {
        setUserId(userid)
    }

    const handleUserDelet = async () => {
        try {
            const DeletUser = await deleteUser(`/api/delete/${userId}`)
            const response = DeletUser.data;
            dispatch(getUserList());
            if (response.success) {
                toast.success(response.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handlechange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })

    }

    const UpadteUserData = (userValue) => {
        setValue(userValue)
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const UpdatedUser = await put(`/api/update/${value._id}`, value)
            const response = UpdatedUser.data
            dispatch(getUserList())
            if (response.success) {
                toast.success(response.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            
            <Table Deletuser={deletuser} UpdatedUser={UpadteUserData}></Table>
            <AddUser />
            <UpdatedUser handleOnSubmit={handleOnSubmit} value={value} handlechange={handlechange} />
            <DeletUser handleUserDelet={handleUserDelet} />
        </>
    )
}
