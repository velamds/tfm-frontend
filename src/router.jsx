import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AlertList from "./pages/AlertList";
import AlertForm from "./pages/AlertForm";


const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
    path: "/dashboard",
        element: <Dashboard />,
            children: [
                { path: "alerts", element: <AlertList /> },
                { path: "alerts/new", element: <AlertForm /> },
                { path: "alerts/:id", element: <AlertForm /> },
                ],
    },
]);


export default router;