import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../services/ApiEndpoint';


export const getUserList = createAsyncThunk(
    'getUserList',
    async () => {
        try {
            const request = await get('/api/get')
            const response = request.data
            return response;
        } catch (error) {
            console.log(error);
        }
    })



const initialState = {
    data: {}
}
const UserSlice = createSlice({
    name: "Auth",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getUserList.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }

})

export default UserSlice.reducer