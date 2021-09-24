import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'

// ICONS IMPORTS
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post() {

    // displayName,
    // userName,
    // verified,
    // timestamps,
    // tweet-text,
    // avatar,
    // image/GIF,


    return (
        <div className='post'>
            <div className="post_avatar">
                <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQER-EhsuMeeVQ/profile-displayphoto-shrink_400_400/0/1631617863428?e=1637798400&v=beta&t=McdlXikJwTsa1bWLfdvtln0-84pQIs5svnrkim60Jwo' alt="Avatar"></Avatar>
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className="post_headrText">
                        <h3>
                            Akash Patel
                            <VerifiedUserIcon className='post_badge'/>
                            <span className="post_headrSpecial">@thefstalphabet</span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>The goal isn't just to solve the problems, the goal is to solve the problems in the best possible way.</p>
                    </div>
                </div> 
                <img src="https://pbs.twimg.com/media/E3SnvoDVEAkDFIb?format=jpg&name=large" alt="post media"/>
                <div className="post_footer">
                    <ChatBubbleOutlineIcon/>
                    <RepeatIcon/>
                    <FavoriteBorderIcon/>
                    <PublishIcon/>
                </div>
            </div>
        </div>
    )
}

export default Post
