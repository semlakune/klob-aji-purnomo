import {createBrowserRouter} from "react-router-dom";
import HomeView from "../views/HomeView";
import CreateJob from "../views/CreateJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeView/>
    },
    {
        path: "/buat-lowongan-pekerjaan",
        element: <CreateJob/>
    }
]);

export default router;