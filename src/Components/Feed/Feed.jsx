import React from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'

function Feed() {
    return (
        <div className="feed">
            
            {/* header */}
            <div className="feed_header">
                <h1>Home</h1>
            </div>

            {/* tweet box */}
            <TweetBox/>


            {/* All Posts */}
            <Post/>
            <Post/>

        </div>
    )
}

export default Feed
