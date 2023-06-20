import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadComments } from '../store/comment.actions.js'

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
                    <li className="comment-preview" key={comment._id}>
                        <h4>{comment.mail}</h4>
                        <p>{comment.msg}</p>
                        <img src={comment.ImgUrl} alt="" />
                    </li>
                ))}
            </ul>
        </div>
    )
}
