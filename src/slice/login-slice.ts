import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './signup-slice'

const initialState: User = {
    info: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        nickname: "",
    }
}

export const loginSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        userLogin: (state, action: PayloadAction<User>) => {
            state.info = action.payload.info
        }
    },
});

export const loginAction = loginSlice.actions
export default loginSlice.reducer