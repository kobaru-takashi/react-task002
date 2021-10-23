import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export type User = {
    name: FormDataEntryValue | null
    email: FormDataEntryValue | null
    password: FormDataEntryValue | null
    nickname: FormDataEntryValue | null
}

type Infos = {
    logIn: User,
    users: User[]
}

const initialState: Infos = {
    logIn: {
        name: "",
        email: "",
        password: "",
        nickname: ""
    },
    users: [{
        name: "admin",
        email: "admin@",
        password: "admin1234",
        nickname: "test",
    }]

}

export const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        userAddition: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },
        userLogin: (state, action: PayloadAction<User>) => {
            state.logIn = action.payload
        }
    },
});

export const userAction = userSlice.actions
export default userSlice.reducer