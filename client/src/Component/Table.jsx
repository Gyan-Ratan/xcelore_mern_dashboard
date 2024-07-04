
import { useEffect } from 'react';
import useGetIsAdmin from './useGetIsAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../redux/UserSlice';
import { Logout } from '../redux/AuthSlice'
export default function Table({ Deletuser, UpdatedUser }) {
    const isAdmin = useGetIsAdmin()
    const dispatch = useDispatch()
    const data = useSelector(state => state.Users.data)

    useEffect(() => {
        dispatch(getUserList())
    }, [])


    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>{"Manage"} <b>Employees</b></h2>
                            </div>
                            <div className="col-sm-6">
                                {isAdmin ? <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <i className="material-icons">&#xE147;</i> <span>Add New Employee</span>
                                </a> :
                                    <span>Add Employee Disabled</span>}
                                    <span className="logout"onClick={() => dispatch(Logout())}>Logout</span>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users?.map((elem, index) => {
                                return (
                                    <tr key={index}>
                                        <td></td>
                                        <td>{elem.name}</td>
                                        <td>{elem.role}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.phone}</td>
                                        {isAdmin ? <td>
                                            <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdatedUser(elem)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                                            </a>
                                            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => Deletuser(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="delete" >&#xE872;</i>
                                            </a>
                                            {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                                        </td> :
                                            <span style={{ display: "flex", flexDirection: "column", flex: 1 }}>Not Allowed</span>}

                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div >


        </>
    );
}
