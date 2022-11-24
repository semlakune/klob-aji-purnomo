import {JOB_VACANCY_ADD_JOB, JOB_VACANCY_FETCH_ALL} from "./actionType";
import {API_URL} from "../../constant/api_url";

export const fetchAllJobVacancies = (payload) => {
    return { type: JOB_VACANCY_FETCH_ALL, payload }
}

export const addJobVacancy = (payload) => {
    return { type: JOB_VACANCY_ADD_JOB, payload }
}

//-----------

export const allJobVacancies = () => {
    return (dispatch) => {
        return fetch(API_URL, {
            headers: { 'Content-Type': 'x-www-form-urlencoded', },
        })
            .then((res) => {
                if(!res.ok) return res.text().then(text => { throw new Error(text) })
                else return res.json();
            })
            .then((data) => {
                dispatch(fetchAllJobVacancies(data))
            })
    }
}

export const createJobVacancy = (jobVacancy) => {
    return (dispatch) => {
        dispatch(addJobVacancy(jobVacancy))
    }
}