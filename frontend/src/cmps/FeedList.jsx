import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadComments } from '../store/comment.actions.js'
import { utilService } from '../services/util.service.js'

export function FeedList() {
    const comments = useSelector(
        (storeState) => storeState.commentModule.comments
    )

    useEffect(() => {
        onLoadComments()
    }, [])

    async function onLoadComments() {
        try {
            await loadComments()
            console.log(comments)
        } catch (err) {
            console.log('Cannot load commnts')
        }
    }

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
