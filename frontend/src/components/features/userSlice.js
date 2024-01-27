import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    email: '',
    name: '',
    phone: '',
    admin: '',
};

export const userSlice = createSlice({
    name: 'user_info',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.admin = action.payload.admin;
        },
        unsetUserInfo: (state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.admin = action.payload.admin;
        },
    },
});

export const { setUserInfo, unsetUserInfo } = userSlice.actions;

export default userSlice.reducer;
