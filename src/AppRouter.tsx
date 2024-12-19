import { FC, useEffect } from "react";
import "./index.scss";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import FormCreation from "./pages/FormCreation";
import PlanOfAction from "./pages/PlanOfAction";
import AddUser from "./components/AddUser";
import MainLayout from "./layouts/MainLayout";
import Overview from "./pages/Overview";
import LoginPage from "./pages/home/Login";

const router = createBrowserRouter([
    {
        path: "/login",
        Component: LoginPage
    },
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "overview",
                Component: Overview
            },
            {
                path: "form-creation",
                Component: FormCreation
            },
            {
                path: "poa",
                Component: PlanOfAction
            },
            {
                path: "admin",
                children: [
                    {
                        path: "user",
                        Component: AddUser
                    },
                    {
                        path: '*', // Redirect any unmatched paths under admin to /admin/user
                        element: <Navigate to="user" replace />, // Redirect to user page by default
                    },
                ]
            }
        ]
    }
]);

const AppRouter: FC = () => {
    useEffect(() => {

    }, [])

    return <RouterProvider router={router} fallbackElement={<p>Initial Loading Element ....</p>} />
};

export default AppRouter;