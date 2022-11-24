import {useDispatch, useSelector} from "react-redux";
import NavBar from "../components/NavBar";
import parse from 'html-react-parser';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {jobVacancyById, updateJobVacancyById} from "../store/actions/actionJobVacancy";
import moment from "moment";
import 'moment/locale/id';

export default function JobDetail() {
    const { jobVacancyCode } = useParams()
    const dispatch = useDispatch();

    const { jobVacancy } = useSelector(state => state.jobVacancyReducer);
    const job = jobVacancy[0];
    const rupiah = Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", });

    moment.locale('id');
    const sinceDate = moment(job?.postedDate).fromNow()

    const updateJobHandler = (jobVacancyCode) => {
        dispatch(updateJobVacancyById(jobVacancyCode))

    }

    useEffect(() => {
        dispatch(jobVacancyById(jobVacancyCode))
    }, [])


    return (
        <div className={"overflow-hidden"}>
            <NavBar/>
            <h1 className={"font-bold text-2xl ml-16"}>Detail Lowongan Pekerjaan :</h1>
            <div className={"mx-16 w-100 h-100 my-10"}>
                <div className={"flex flex-col rounded-2xl bg-stone-200 p-10"}>
                    <div className={"flex items-center justify-center"}>
                        <img src={job?.corporateLogo} alt="Corporate Logo" className={"w-1/6 h-1/6"}/>
                    </div>
                    <div className={"mt-10"}>
                        <h1 className={"font-bold mb-5 text-xl"}>{job?.corporateName}</h1>
                        {/*<div dangerouslySetInnerHTML={{__html: job?.descriptions}}/>*/}
                        {parse(`${job?.descriptions}`)}
                        <h1 className={"my-5"}>{job?.positionName}</h1>
                        <h1 className={"mb-5"}>Status: <span className={"bg-stone-500 w-max p-1 rounded-xl px-2 text-white"}>{job?.status}</span></h1>
                        <h1>Gaji: <span className={"bg-stone-500 w-max p-1 rounded-xl px-2 text-white"}>{rupiah.format(job?.salaryFrom)} - {rupiah.format(job?.salaryTo)}</span></h1>
                        <h1 className={"text-right"}>{sinceDate}</h1>
                        <button onClick={() => updateJobHandler(job?.jobVacancyCode)} className={!job?.applied ? "bg-green-800 text-white rounded-xl p-3 w-full mt-5 hover:bg-green-600" : "bg-blue-500 text-white rounded-xl p-3 w-full mt-5"} disabled={job?.applied}>{!job?.applied ? 'KIRIM LAMARAN' : 'LAMARAN TELAH DIKIRIM'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}