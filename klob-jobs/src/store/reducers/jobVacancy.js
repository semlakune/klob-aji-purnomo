import {JOB_VACANCY_ADD_JOB, JOB_VACANCY_FETCH_ALL, JOB_VACANCY_FETCH_BY_ID} from "../actions/actionType";

const initialState = {
    jobVacancies: [],
    jobVacancy: {}
}

export default function jobVacancyReducer(state = initialState, action) {
    switch (action.type) {
        case JOB_VACANCY_FETCH_ALL:
            return { ...state, jobVacancies: action.payload }
        case JOB_VACANCY_ADD_JOB:
            return { ...state, jobVacancies: [...state.jobVacancies, action.payload] }
        case JOB_VACANCY_FETCH_BY_ID:
            return { ...state, jobVacancy: state.jobVacancies.filter((job) => job.jobVacancyCode === action.payload) }
        default:
            return state
    }
}