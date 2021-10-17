import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
    userInfo: {
        name: string
        email: string
        password: string
        nickname: string
    }

}

const initialState: User = {
    userInfo: {
        name: "",
        email: "",
        password: "",
        nickname: ""
    }
}

export const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        userAction: (state, action: PayloadAction<User>) => {
            state.userInfo = action.payload.userInfo
        },
        // logOut: () => {

        // },
    },

});

export const { userAction } = userSlice.actions
export default userSlice.reducer