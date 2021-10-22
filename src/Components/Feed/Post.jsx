import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'

// ICONS IMPORTS
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({displayName, username, verified, tweet_text, avatar, image}) {
    return (
        <div className='post'>
            <div className="post_avatar">
                <Avatar src={avatar} alt="Avatar"></Avatar>
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className="post_headrText">
                        <h3>
                            {displayName}
                            { verified && <VerifiedUserIcon className='post_badge'/>}
                            <span className="post_headrSpecial">@{username}</span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>{tweet_text}</p>
                    </div>
                </div> 
                <img src={image} alt="post media"/>
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
