import { commentService } from '../services/comment.service'
import { store } from './store.js'
import { ADD_COMMENT, SET_COMMENTS } from './comment.reducer'

// Action Creators
// export function getActionRemoveComment(CommentId) {
//     return { type: REMOVE_Comment, CommentId }
// }
export function getActionAddComment(comment) {
    return { type: ADD_COMMENT, comment }
}
// export function getActionSetWatchedUser(user) {
//     return { type: SET_WATCHED_USER, user }
// }

export async function loadComments(filterBy = '') {
    try {
        console.log('filterBy: ', filterBy )
        const comments = await commentService.query()
        const filteredComments = comments.filter(comment => {
            const regex = new RegExp(filterBy, 'i')
            return regex.test(comment.msg)
        })
        console.log('filteredComments: ', filteredComments )
        store.dispatch({ type: SET_COMMENTS, filteredComments })
    } catch (err) {
        console.log('commentActions: err in loadComments', err)
        throw err
    }
}

export async function addComment(comment) {
    console.log(comment)
    try {
        const addedComment = await commentService.add(comment)
        store.dispatch(getActionAddComment(addedComment))
    } catch (err) {
        console.log('CommentActions: err in addComment', err)
        throw err
    }
}

// export async function removeComment(CommentId) {
//     try {
//         await CommentService.remove(CommentId)
//         store.dispatch(getActionRemoveComment(CommentId))
//     } catch (err) {
//         console.log('CommentActions: err in removeComment', err)
//         throw err
//     }
// }
