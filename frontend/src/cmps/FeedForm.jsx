import { useRef } from 'react'
// import { useSelector } from 'react-redux'
import { addComment } from '../store/comment.actions.js'

export function FeedForm() {
    // const comments = useSelector((storeState) => storeState.carModule.cars)

    const mailRef = useRef(null)
    const msgRef = useRef(null)

    async function hadleSubmit(ev) {
        ev.preventDefault()
        console.log(mailRef.current.value)
        console.log(msgRef.current.value)
        const currComment = {
            mail: mailRef.current.value,
            msg: msgRef.current.value,
        }
        try {
            await addComment(currComment)
        } catch (err) {
            console.log(err)
        } finally {
            mailRef.current.value = ''
            msgRef.current.value = ''
        }
    }

    return (
        <div className="feed-form-container">
            <form onSubmit={hadleSubmit}>
                <input type="text" placeholder="Email" ref={mailRef} />
                <textarea placeholder="Message" ref={msgRef}></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}
