import {createBrowserRouter} from "react-router-dom";
import HomeView from "../views/HomeView";
import CreateJob from "../views/CreateJob";
import JobDetail from "../views/JobDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeView/>
    },
    {
        path: "/buat-lowongan-pekerjaan",
        element: <CreateJob/>
    },
    {
        path: "/detail-lowongan-perkerjaan/:jobVacancyCode",
        element: <JobDetail/>
    }
]);

export default router;