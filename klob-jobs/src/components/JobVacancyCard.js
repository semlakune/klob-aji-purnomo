import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {updateJobVacancyById} from "../store/actions/actionJobVacancy";
import moment from "moment";
import 'moment/locale/id';

export default function JobVacancyCard(props) {
    const {jobVacancy} = props;
    const navigate = useNavigate()
    const dispatch = useDispatch()

    moment.locale('id');
    const sinceDate = moment(jobVacancy?.postedDate).fromNow()

    const jobVacancyDetailHandler = (jobVacancyCode) => {
        navigate(`/detail-lowongan-perkerjaan/${jobVacancyCode}`)
    }
    const updateJobHandler = (jobVacancyCode) => {
        dispatch(updateJobVacancyById(jobVacancyCode))
    }

    return (
        <div className={"w-96 rounded overflow-hidden shadow-lg m-5"}>
            <div className={"flex items-center justify-center p-10"}>
                <img src={jobVacancy?.corporateLogo} className={"max-w-sm h-20"} alt="Corporate Logo"/>
            </div>
            <div className={"px-6 py-4"}>
                <div className={"font-bold text-xl mb-2"}>{jobVacancy?.corporateName}</div>
                <p className={"text-gray-700 text-base mb-5"}>{jobVacancy?.positionName}</p>
                <div className={"grid grid-cols-2 mb-2"}>
                    <h1>Status</h1>
                    <h1 className={"bg-stone-500 p-0.5 text-center rounded text-white text-sm"}>{jobVacancy?.status}</h1>
                </div>
                <div className={"grid grid-cols-3 mb-2"}>
                    <h1>Gaji</h1>
                    <h1 className={"bg-stone-500 p-0.5 text-center rounded text-white col-span-2 text-sm"}>{'IDR ' + jobVacancy?.salaryFrom.toLocaleString('id-ID')} - {'IDR ' + jobVacancy?.salaryTo.toLocaleString('id-ID')}</h1>
                </div>
                <div className={"grid grid-cols-2 mb-2"}>
                    <button onClick={() => jobVacancyDetailHandler(jobVacancy?.jobVacancyCode)} type={"button"} className={"text-blue-600 text-left"}>Baca Detail</button>
                    <h1 className={"text-right"}>{sinceDate}</h1>
                </div>
                <button onClick={() => updateJobHandler(jobVacancy?.jobVacancyCode)} className={!jobVacancy.applied ? 'text-white bg-green-800 w-full p-2 rounded-xl mt-5 hover:bg-green-600' : 'text-white bg-stone-500 w-full p-2 rounded-xl mt-5'} disabled={jobVacancy.applied}>KIRIM LAMARAN</button>
            </div>
        </div>
    )
}