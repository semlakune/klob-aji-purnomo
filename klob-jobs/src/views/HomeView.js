import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {allJobVacancies} from "../store/actions/actionJobVacancy";
import NavBar from "../components/NavBar";
import JobVacancyCard from "../components/JobVacancyCard";

export default function HomeView() {
    const dispatch = useDispatch();
    const {jobVacancies} = useSelector(state => state.jobVacancyReducer);

    useEffect(() => {
        if (jobVacancies.length === 0) {
            dispatch(allJobVacancies())
        }
    }, [])
    return (
        <div className={"overflow-hidden"}>
            <NavBar/>
            <h1 className={"font-bold text-2xl ml-16"}>Lowongan Pekerjaan :</h1>
            <div className={"flex flex-row flex-wrap items-center justify-center mb-20"}>
                {
                    jobVacancies.map((jobVacancy, index) => {
                        return <JobVacancyCard key={index} jobVacancy={jobVacancy}/>
                    })
                }
            </div>
        </div>
    );
}