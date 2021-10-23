import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type User = {
    userInfo: {
        name: FormDataEntryValue | null
        email: FormDataEntryValue | null
        password: FormDataEntryValue | null
        nickname: FormDataEntryValue | null
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
    },


});

export const { userAction } = userSlice.actions
export default userSlice.reducer