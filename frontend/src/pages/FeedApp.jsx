import { useState } from 'react'
import { FeedForm } from '../cmps/FeedForm'
import { FeedList } from '../cmps/FeedList'

export function FeedApp() {
    const [filterBy, setFilterBy] = useState('')

    function handleChange(ev){
        const {value} = ev.target
        setFilterBy(value)
    }

    return (
        <div className="feed-container">
            <FeedForm />
            <input type="text" value={filterBy} onChange={handleChange} />
            <FeedList filterBy={filterBy} />
        </div>
    )
}
