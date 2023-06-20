import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { loadComments } from '../store/comment.actions.js'
import { utilService } from '../services/util.service.js'

export function FeedList({ filterBy }) {
    const comments = useSelector(
        (storeState) => storeState.commentModule.comments
    )


    useEffect(() => {
        onLoadComments(filterBy)
    }, [filterBy])

    async function onLoadComments(filterBy) {
        try {
            await loadComments(filterBy)
        } catch (err) {
            console.log('Cannot load commnts')
        }
    }
    if (!comments) return null
    return (
        <div className="feed-list-container">
            <ul className="comment-list">
                {comments.map((comment) => (
                    <li className="comment-preview" key={utilService.makeId()}>
                        <img src={comment.imgUrl} alt="" />
                        <div className="comment-content">
                            <h4>{comment.mail}</h4>
                            <p>{comment.msg}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
