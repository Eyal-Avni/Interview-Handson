// import { useEffect, useState } from 'react'
import { FeedForm } from '../cmps/FeedForm'
import { FeedList } from '../cmps/FeedList'

export function FeedApp() {
    return (
        <div className="feed-container">
            <FeedForm />
            <FeedList />
        </div>
    )
}
