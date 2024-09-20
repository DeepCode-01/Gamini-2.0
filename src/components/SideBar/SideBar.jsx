import {useContext, useState } from "react";

import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const SideBar = () => {
  const [extented, setExtented] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt } = useContext(Context);

  const loadPrompt = async (prompt)=>{
    setRecentPrompt(prompt)
     await onSent(prompt)
  }

  return (
    <div className="sidebar min-h-full inline-flex flex-col justify-between bg-[#f0f4f9] py-5 px-3">
      <div className="top">
        <img
          onClick={() => setExtented((prev) => !prev)}
          className="menu w-6 block ml-4 cursor-pointer"
          src={assets.menu_icon}
          alt="menu"
        />
        <div className="new-chat mt-12 inline-flex items-center gap-3 py-2 px-4 rounded-full text-sm text-gray-600 cursor-pointer bg-[#e6eaf1]">
          <img className="w-5" src={assets.plus_icon} alt="plus" />
          {extented ? <p>New Chat</p> : null}
        </div>
        {extented ? (
          <div className="recent flex flex-col">
            <p className="recent-title mt-6 mb-3 ml-2 ">Recent</p>
            {prevPrompt && prevPrompt.length > 0
              ? prevPrompt.map((item, index) => {
                  return (
                    <div
                    onClick={()=>loadPrompt(item)}
                      key={index}
                      className="recent-entry flex items-start gap-2 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]"
                    >
                      <img
                        className="w-6"
                        src={assets.message_icon}
                        alt="message"
                      />
                      <p>{item.slice(0,15)}...</p>
                    </div>
                  );
                })
              : null}
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col">
        <div className="flex items-start gap-2 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-6" src={assets.question_icon} alt="help" />
          {extented ? <p>Help</p> : null}
        </div>
        <div className="flex items-start gap-2 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-6" src={assets.history_icon} alt="history" />
          {extented ? <p>Activity</p> : null}
        </div>
        <div className="flex items-start gap-2 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-6" src={assets.setting_icon} alt="settings" />
          {extented ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
