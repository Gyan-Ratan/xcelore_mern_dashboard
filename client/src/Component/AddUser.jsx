import { useRef, useState } from 'react'
import { post } from '../services/ApiEndpoint';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import { getUserList } from '../redux/UserSlice'


export default function AddUser() {
    const dispatch = useDispatch()
    const [value, setValue] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'user',
        password: 'password'
    })
    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    };

    const CloseRef = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const adduser = await post('/api/create', value)
            const response = adduser.data;
            if (response.success) {
                toast.success(response.Message)
                CloseRef.current.click()

            }
            dispatch(getUserList())
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" value={value.name} name='name' onChange={handleOnchange} className="form-control" required />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" value={value.email} name='email' onChange={handleOnchange} className="form-control" required />
                                </div>

                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" value={value.phone} name='phone' onChange={handleOnchange} className="form-control" required />
                                </div>

                                <div className="form-group">
                                    <label>Role</label>
                                    <select id="role" name="role" className="form-control" value={value.role} required onChange={handleOnchange}>
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Add" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
