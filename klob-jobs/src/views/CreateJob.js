import NavBar from "../components/NavBar";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {createJobVacancy} from "../store/actions/actionJobVacancy";

export default function CreateJob() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [jobVacancy, setJobVacancy] = useState({
        corporateLogo: "",
        corporateName: "",
        positionName: "",
        status: "",
        salaryFrom: "",
        salaryTo: "",
        postedDate: "",
        applied: false,
        corporateId: "",
        descriptions: "",
        jobVacancyCode: "",
    })

    const createJobHandler = (e) => {
        e.preventDefault()
        dispatch(createJobVacancy(jobVacancy))
        navigate("/")
    }

    useEffect(() => {
        setJobVacancy({
            corporateLogo: "",
            corporateName: "",
            positionName: "",
            status: "",
            salaryFrom: "",
            salaryTo: "",
            postedDate: "",
            applied: false,
            corporateId: "",
            descriptions: "",
            jobVacancyCode: "",
        })
    }, [])

    return (
        <div className={"overflow-hidden"}>
            <NavBar/>
            <div className={"w-screen px-16"}>
                <h1 className={"font-bold text-2xl"}>Buat Lowongan: </h1>
                <div className={"flex-1 justify-center items-center"}>
                    <form onSubmit={createJobHandler}>
                        <div className={"flex flex-col text-left mx-96 mb-5"}>
                            <label htmlFor={"corporateLogo"} className={"font-bold mb-1"}>Logo Perusahaan</label>
                            <input onChange={(e) => setJobVacancy({...jobVacancy, corporateLogo: e.target.value, jobVacancyCode: `KVCCRP00069${Math.floor(Math.random() * 9)}`})} value={jobVacancy.corporateLogo} type="text" className={"shadow p-3 input bg-neutral-200 rounded-2xl"} name={"corporateLogo"} placeholder={"Ketikkan Logo Perusahaan"}/>
                            <p className={"mt-2 text-stone-400 text-sm"}>Dalam bentuk link url</p>
                        </div>
                        <div className={"flex flex-col text-left mx-96 mb-5"}>
                            <label htmlFor={"corporateName"} className={"font-bold mb-2"}>Nama Perusahaan</label>
                            <input onChange={(e) => setJobVacancy({...jobVacancy, corporateName: e.target.value})} value={jobVacancy.corporateName} type="text" className={"shadow p-3 input bg-neutral-200 rounded-2xl"} name={"corporateName"} placeholder={"Ketikkan Nama Perusahaan"}/>
                        </div>
                        <div className={"flex flex-col text-left mx-96 mb-5"}>
                            <label htmlFor={"positionName"} className={"font-bold mb-2"}>Nama Lowongan</label>
                            <input onChange={(e) => setJobVacancy({...jobVacancy, positionName: e.target.value})} value={jobVacancy.positionName} type="text" className={"shadow p-3 input bg-neutral-200 rounded-2xl"} name={"positionName"} placeholder={"Ketikkan Nama Lowongan"}/>
                        </div>
                        <div className={"flex flex-col text-left mx-96 mb-5"}>
                            <label htmlFor={"status"} className={"font-bold mb-2"}>Status Karyawan</label>
                            <input onChange={(e) => setJobVacancy({...jobVacancy, status: e.target.value})} value={jobVacancy.status} type="text" className={"shadow p-3 input bg-neutral-200 rounded-2xl"} name={"status"} placeholder={"Ketikkan Status Karyawan"}/>
                        </div>
                        <div className={"flex flex-col text-left mx-96 mb-5"}>
                            <label className={"font-bold mb-2"}>Kisaran Gaji Karyawan</label>
                            <div className={"grid grid-cols-3"}>
                                <input onChange={(e) => setJobVacancy({...jobVacancy, salaryFrom: e.target.value})} value={jobVacancy.salaryFrom} type="number" className={"shadow p-3 input bg-neutral-200 rounded-2xl"} name={"salaryFrom"} placeholder={"1.000.000"} min={0}/>
                                <h1 className={"flex justify-center items-center"}>Sampai Dengan</h1>
                                <input onChange={(e) => setJobVacancy({...jobVacancy, salaryTo: e.target.value})} value={jobVacancy.salaryTo} type="number" className={"shadow p-3 input bg-neutral-200 rounded-2xl"} name={"salaryTo"} placeholder={"10.000.000"}/>
                            </div>
                        </div>
                        <div className={"flex flex-col text-left mx-96 mb-5"}>
                            <label htmlFor={"postedDate"} className={"font-bold mb-2"}>Tanggal Posting</label>
                            <input onChange={(e) => setJobVacancy({...jobVacancy, postedDate: e.target.value})} value={jobVacancy.postedDate} type="date" className={"shadow p-3 input bg-neutral-200 rounded-2xl"} name={"postedDate"}/>
                        </div>
                        <button type={"submit"} className={"p-3 bg-green-800 rounded-xl text-white mx-96 hover:bg-green-600 px-5"}>Simpan</button>
                    </form>
                </div>
            </div>
        </div>
    )
}