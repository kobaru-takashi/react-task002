import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type User = {
    info: {
        firstName: FormDataEntryValue | null
        lastName: FormDataEntryValue | null
        email: FormDataEntryValue | null
        password: FormDataEntryValue | null
        nickname: FormDataEntryValue | null
    }
}

// 課題
// sliceの分ける
// 機能無しのDOMだけのページを作成
// ページ遷移はする
// どんなアプリにするかプレゼンする
// プラスα モック 実装イメージが思い付かない。

const initialState: User[] = [{
    info: {
        firstName: "admin",
        lastName: "admin",
        email: "admin@",
        password: "admin1234",
        nickname: "test",
    }
}]

export const signupSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        userSignup: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
        },
    },
});

export const signupAction = signupSlice.actions
export default signupSlice.reducer