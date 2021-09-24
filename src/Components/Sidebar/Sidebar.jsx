import React from 'react'
import './Sidebar.css'

// COMPONENT IMPORTS
import SidebarOption from './SidebarOption';

// ICONS IMPORTS
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className='sidebar-twitterIcon'/>

            {/* sidebar options */}
            <SidebarOption active text="Home" Icon={HomeIcon}/>
            <SidebarOption text="Explore" Icon={SearchIcon}/>
            <SidebarOption text="Notifications" Icon={NotificationsNoneIcon}/>
            <SidebarOption text="Message" Icon={MailOutlineIcon}/>
            <SidebarOption text="Bookmark" Icon={BookmarkBorderIcon}/>
            <SidebarOption text="List" Icon={ListAltIcon}/>
            <SidebarOption text="Profile" Icon={PersonOutlineIcon}/>
            <SidebarOption text="More" Icon={MoreHorizIcon}/>
            
            {/* button of twitter */}
            <Button fullWidth variant="outlined" className="sidebar_tweet">Tweet</Button>

        </div>
    )
}

export default Sidebar
