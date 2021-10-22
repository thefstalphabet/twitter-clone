import React from 'react'
import './Widgets.css'

import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';

// ICON IMPORTS
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets_widgetContainer">
                <h2>What is happening</h2>
                <TwitterTweetEmbed
                tweetId={'1444741381579177984'}
                />
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="thefstalphabet"
                options={{height: 400}}
                />
                <TwitterShareButton/>
            </div>
        </div>
    )
}

export default Widgets
