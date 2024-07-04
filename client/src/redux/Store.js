import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import UserSlice from './UserSlice';

export const store = configureStore({
    reducer: {
        Auth: AuthSlice,
        Users: UserSlice
    }

});

