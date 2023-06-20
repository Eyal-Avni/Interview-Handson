export const SET_COMMENTS = 'SET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
// export const REMOVE_REVIEW = 'REMOVE_REVIEW'
// export const UPDATE_REVIEW = 'UPDATE_REVIEW'

const initialState = {
    comments: [],
}

export function commentReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_COMMENTS:
            return { ...state, comments: action.comments }
        case ADD_COMMENT:
            return { ...state, comments: [...state.comments, action.comment] }
        // case REMOVE_REVIEW:
        //     return {
        //         ...state,
        //         reviews: state.reviews.filter(
        //             (review) => review._id !== action.reviewId
        //         ),
        //     }
        // case UPDATE_REVIEW:
        //     return {
        //         ...state,
        //         reviews: state.reviews.map((review) =>
        //             review._id === action.review._id ? action.review : review
        //         ),
        //     }
        default:
            return state
    }
}
