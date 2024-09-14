import React, { useState } from "react";
// import "./SideBar.css"
import { assets } from "../../assets/assets";

const SideBar = () => {
  const [extented, setExtented] = useState(false);

  return (
    <div className="sidebar min-h-full inline-flex flex-col justify-between bg-[#f0f4f9] py-5 px-3">
      <div className="top">
        <img onClick={()=>setExtented(prev=>!prev)}
          className="menu w-6 block ml-4 cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
        <div className="new-chat mt-12 inline-flex items-center gap-3 py-2 px-4 rounded-full text-sm text-gray-600 cursor-pointer bg-[#e6eaf1]">
          <img className="w-5" src={assets.plus_icon} alt="" />
          {extented ? <p>New Chat</p> : null}
        </div>
        {extented ? (
          <div className="recent flex flex-col">
            <p className="recent-title mt-7 mb-5">Recent</p>
            <div className="recent-entry flex items-start gap-2 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <img className="w-6" src={assets.message_icon} alt="" />
              <p>What is react....</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col">
        <div className=" flex items-start gap-2 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] ">
          <img className="w-6" src={assets.question_icon} alt="" />
          {extented ? <p>Help</p> : null}
        </div>
        <div className=" flex items-start gap-2 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-6" src={assets.history_icon} alt="" />
          {extented ? <p>Activity</p> : null}
        </div>
        <div className=" flex items-start gap-2 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-6" src={assets.setting_icon} alt="" />
          {extented ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
