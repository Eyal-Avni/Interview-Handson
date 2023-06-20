import {logger} from '../../services/logger.service.mjs'
import {socketService} from '../../services/socket.service.mjs'
import {authService} from '../auth/auth.service.mjs'
import {commentService} from './comment.service.mjs'

export async function getComments(req, res) {
    try {
        const comments = await commentService.query(req.query)
        console.log('comments: ', comments )
        res.send(comments)
    } catch (err) {
        logger.error('Cannot get comments', err)
        res.status(400).send({ err: 'Failed to get comments' })
    }
}

export async function deleteComment(req, res) {
    try {
        const deletedCount = await commentService.remove(req.params.id)
        if (deletedCount === 1) {
            res.send({ msg: 'Deleted successfully' })
        } else {
            res.status(400).send({ err: 'Cannot remove comment' })
        }
    } catch (err) {
        logger.error('Failed to delete comment', err)
        res.status(400).send({ err: 'Failed to delete comment' })
    }
}


export async function addComment(req, res) {
    try {
        var comment = req.body
        comment = await commentService.add(comment)
        // socketService.broadcast({type: 'comment-added', data: comment})
        res.send(comment)
    } catch (err) {
        logger.error('Failed to add comment', err)
        res.status(400).send({ err: 'Failed to add comment' })
    }
}

