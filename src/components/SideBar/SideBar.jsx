import React from 'react'
import "./SideBar.css"
import {assets} from "../../assets/assets"

const SideBar = () => {
  return (
    <div className='sidebar min-h-full inline-flex flex-col justify-between bg-[#f0f4f9]'>
        <div className="top">
            <img className="menu block ml-2 cursor-pointer" src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img className='w-1' src={assets.plus_icon} alt="" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recent-title">
                    Recent
                </p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react....</p>
                </div>
            </div>

        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                <p>Help</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                <p>Activity</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                <p>Settings</p>
            </div>
        </div>
      
    </div>
  )
}

export default SideBar
