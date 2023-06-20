import { commentService } from '../services/comment.service'
import { store } from './store.js'
import { ADD_COMMENT, SET_COMMENTS } from './comment.reducer'


export function getActionAddComment(comment) {
    return { type: ADD_COMMENT, comment }
}

export async function loadComments(filterBy = '') {
    try {
        const comments = await commentService.query()
        const filteredComments = comments.filter(comment => {
            const regex = new RegExp(filterBy, 'i')
            return regex.test(comment.msg)
        })
        store.dispatch({ type: SET_COMMENTS, comments: filteredComments })
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

