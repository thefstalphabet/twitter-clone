import { Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';
import { Avatar } from '@material-ui/core'

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form action="">
                <div className='tweetBox_input'>
                    <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQER-EhsuMeeVQ/profile-displayphoto-shrink_400_400/0/1631617863428?e=1637798400&v=beta&t=McdlXikJwTsa1bWLfdvtln0-84pQIs5svnrkim60Jwo' alt="Avatar"></Avatar>
                    <input placeholder="What's happening?"></input>
                </div>
                <input className="tweetBox_imageInput" placeholder="Enter image URL"></input>
                <Button className='tweetBox_tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
