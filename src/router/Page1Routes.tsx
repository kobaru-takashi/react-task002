import { MyPage } from "../components/MyPage";
import { Page1 } from "../components/Page1";
import { Page1DetailA } from "../components/Page1DetailA";
import { Page1DetailB } from "../components/Page1DetailB";

export const Page1Routes = [
    {
        path: "/",
        exact: true,
        children: <MyPage />
    },
    {
        path: "/Page1",
        exact: false,
        children: <Page1 />
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
