import {JOB_VACANCY_FETCH_ALL} from "../actions/actionType";

const initialState = {
    jobVacancies: []
}

export default function jobVacancyReducer(state = initialState, action) {
    switch (action.type) {
        case JOB_VACANCY_FETCH_ALL:
            return { ...state, jobVacancies: action.payload }
        default:
            return state
    }
}