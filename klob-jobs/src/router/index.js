import {createBrowserRouter} from "react-router-dom";
import HomeView from "../views/HomeView";
import CreateJob from "../views/CreateJob";
import JobDetail from "../views/JobDetail";
import SentJob from "../views/SentJob";

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
    },
    {
        path: "/lamaran-terkirim",
        element: <SentJob/>
    }
]);

export default router;