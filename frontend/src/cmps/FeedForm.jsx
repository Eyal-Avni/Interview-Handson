import { useRef } from 'react'
import { addComment } from '../store/comment.actions.js'
import { MD5 } from 'crypto-js'

export function FeedForm() {
    const mailRef = useRef(null)
    const msgRef = useRef(null)

    async function hadleSubmit(ev) {
        ev.preventDefault()
        const hashedEmail = MD5(mailRef.current.value).toString()
        const currComment = {
            mail: mailRef.current.value,
            msg: msgRef.current.value,
            imgUrl: `https://www.gravatar.com/avatar/${hashedEmail}`,
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
