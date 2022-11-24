import NavBar from "../components/NavBar";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import AppliedJobCard from "../components/AppliedJobCard";

export default function SentJob() {
    const { jobVacancies } = useSelector(state => state.jobVacancyReducer);
    const sentJobs = jobVacancies.filter((job) => job.applied === true);
    const navigate = useNavigate()
    return (
        <div className={"overflow-hidden"}>
            <NavBar/>
            <h1 className={"font-bold text-2xl ml-16"}>Lamaran Terkirim :</h1>
            <div className={"mx-16 w-100 h-100 my-10"}>
                {sentJobs.length < 1 ?
                    <div className={"flex flex-col items-center justify-center"}>
                        <h1 className={"font-bold"}>Belum ada lamaran terkirim</h1>
                        <button onClick={() => navigate("/")} className={"p-3 bg-green-800 text-white mt-3 rounded-xl hover:bg-green-600"}>Kembali ke home</button>
                    </div>
                :
                    <div className={"flex flex-row flex-wrap items-center justify-center mb-20"}>
                        {
                            sentJobs.map((jobVacancy, index) => {
                                return <AppliedJobCard key={index} jobVacancy={jobVacancy}/>
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}