import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
    name: string
    email: string
    password: string
    nickname: string
}

const initialState: User = {
    name: "",
    email: "",
    password: "",
    nickname: ""
}

export const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        userAction: (state, action: PayloadAction<User>) => {
            state = action.payload
        },
        // logOut: () => {

        // },
    },

});

export const { userAction } = userSlice.actions
export default userSlice.reducer