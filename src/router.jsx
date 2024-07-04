import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";

const route = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,

    }
])

const Router = () => {
    return (
        <RouterProvider router={route} />
    )
}

export default Router;