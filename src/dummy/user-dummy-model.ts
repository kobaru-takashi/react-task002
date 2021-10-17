export type UserInfo = {
    name: string;
    password: string;
    inputAmount: number;
    balance: number;
}

export const users: UserInfo[] = [
    {
        name: "kobaru",
        password: "kobaru",
        inputAmount: NaN,
        balance: 500000,
    },
    {
        name: "takashi",
        password: "takashi",
        inputAmount: NaN,
        balance: 500000,
    }
]