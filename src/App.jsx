import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Donation from "./pages/Donation";
import AdminPanel from "./pages/AdminPanel";
import AboutUsPage from "./pages/AboutUsPage";
import NGOs from "./pages/NGOs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <SignIn />,
    },
    {
        path: "/register",
        element: <SignUp />,
    },
    {
        path: "/donation",
        element: <Donation />,
    },
    {
        path: "/admin-panel",
        element: <AdminPanel />,
    },
    {
        path: "/aboutus",
        element: <AboutUsPage />,
    },
    {
        path: "/NGOs",
        element: <NGOs />,
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
