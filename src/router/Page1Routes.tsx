import { MyPage } from "../components/MyPage";
import { Page1DetailA } from "../components/Page1DetailA";
import { Page1DetailB } from "../components/Page1DetailB";

export const Page1Routes = [
    {
        path: "/",
        exact: true,
        children: <MyPage />
    },
    {
        path: "/detailA",
        exact: false,
        children: <Page1DetailA />
    },
    {
        path: "/detailB",
        exact: false,
        children: <Page1DetailB />
    },
]
