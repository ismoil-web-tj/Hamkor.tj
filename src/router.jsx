import { createBrowserRouter } from "react-router-dom";

export const router = ([
    {
        path: '/',
        lazy: () => import ('./Components/layout/Header/Hero/Hero')
    }
])
