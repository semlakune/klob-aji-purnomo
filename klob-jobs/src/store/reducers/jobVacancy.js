import {JOB_VACANCY_ADD_JOB, JOB_VACANCY_FETCH_ALL} from "../actions/actionType";

const initialState = {
    jobVacancies: []
}

export default function jobVacancyReducer(state = initialState, action) {
    switch (action.type) {
        case JOB_VACANCY_FETCH_ALL:
            return { ...state, jobVacancies: action.payload }
        case JOB_VACANCY_ADD_JOB:
            return { ...state, jobVacancies: [...state.jobVacancies, action.payload] }
        default:
            return state
    }
}