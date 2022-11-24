import {
    JOB_VACANCY_ADD_JOB,
    JOB_VACANCY_FETCH_ALL,
    JOB_VACANCY_FETCH_BY_ID,
    JOB_VACANCY_UPDATE_JOB
} from "../actions/actionType";

const initialState = {
    jobVacancies: [],
    jobVacancy: {},
}

export default function jobVacancyReducer(state = initialState, action) {
    switch (action.type) {
        case JOB_VACANCY_FETCH_ALL:
            return { ...state, jobVacancies: action.payload }
        case JOB_VACANCY_ADD_JOB:
            return { ...state, jobVacancies: [...state.jobVacancies, action.payload] }
        case JOB_VACANCY_FETCH_BY_ID:
            return { ...state, jobVacancy: state.jobVacancies.filter((job) => job.jobVacancyCode === action.payload) }
        case JOB_VACANCY_UPDATE_JOB:
            return { ...state, jobVacancies: state.jobVacancies.filter((job) => job.jobVacancyCode === action.payload ? (job.applied = !job.applied) : job) }
        default:
            return state
    }
}