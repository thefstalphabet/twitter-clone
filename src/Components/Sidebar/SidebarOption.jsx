import React from 'react'
import './SidebarOption.css'

function SidebarOption({ text, Icon }) {
    return (
        <div className="sidebarOption">
            <h2>This is an {text}</h2>
            <Icon/>
        </div>
    )
}

export default SidebarOption;
