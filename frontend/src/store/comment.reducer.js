export const SET_COMMENTS = 'SET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const SET_FILTER_BY = 'SET_FILTER_BY'


const initialState = {
    comments: [],
    filterBy:''
}

export function commentReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_COMMENTS:
            return { ...state, comments: action.comments }
        case SET_FILTER_BY:
            return { ...state, comments: action.filterBy }
        case ADD_COMMENT:
            return { ...state, comments: [...state.comments, action.comment] }

        default:
            return state
    }
}
