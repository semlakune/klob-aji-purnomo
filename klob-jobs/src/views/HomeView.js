import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {allJobVacancies} from "../store/actions/actionJobVacancy";
import NavBar from "../components/NavBar";
import JobVacancyCard from "../components/JobVacancyCard";

export default function HomeView() {
    const dispatch = useDispatch();
    const {jobVacancies} = useSelector(state => state.jobVacancyReducer);

    useEffect(() => {
        dispatch(allJobVacancies());
    }, [])

    return (
        <div>
            <NavBar/>
            <div className={"px-10"}>
                <h1 className={"font-bold text-2xl mx-6"}>Lowongan Pekerjaan :</h1>
                <div className={"flex flex-row flex-wrap items-center justify-center"}>
                    {
                        jobVacancies.map((jobVacancy, index) => {
                            return <JobVacancyCard key={index} jobVacancy={jobVacancy}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}