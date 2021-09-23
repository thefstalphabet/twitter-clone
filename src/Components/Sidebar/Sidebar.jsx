import React from 'react'
import './Sidebar.css'

// COMPONENT IMPORTS
import SidebarOption from './SidebarOption';

// ICONS IMPORTS
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className='sidebar-twitterIcon'/>

            {/* sidebar options */}
            <SidebarOption active text="Home" Icon={HomeIcon}/>
            <SidebarOption text="Search" Icon={SearchIcon}/>
            <SidebarOption text="Notifications" Icon={NotificationsIcon}/>
            <SidebarOption text="Message" Icon={EmailIcon}/>
            <SidebarOption text="Profile" Icon={PersonIcon}/>
            <SidebarOption text="More" Icon={MoreHorizIcon}/>
            
            {/* button of twitter */}
            <Button fullWidth variant="outlined" className="sidebar_tweer">Tweet</Button>

        </div>
    )
}

export default Sidebar
