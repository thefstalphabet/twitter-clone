import React, {useState, useEffect} from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
// imported data base from local database file
import db from './firebase';

function Feed() {
    // state to manage posts
    const {posts, setPosts} = useState([]);

    // collecting data from database
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <div className="feed">
            
            <div className="feed_header">
                <h1>Home</h1>
            </div>

            <TweetBox/>

            {posts.map(post => (
                <Post 
                displayName={post.displayName} 
                username={post.username} 
                verified={post.verified} 
                tweet_text={post.tweet_text} 
                image={post.image}/>
            ))}

        </div>
    )
}

export default Feed
