import React from 'react'
import { assets } from "../../assets/assets";
const Main = () => {
  return (
    <div className='main flex-1 min-h-full pb-40 relative text-xl p-5 text-[#585858]'>
      <div className="nav flex items-center justify-between">
        <p>Gamini</p>
        <img className='w-10 rounded-full' src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>Hoe can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>suggest somthing motivatited today </p>
                <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
                <p>Next.js new projects for me </p>
                <img src={assets.bulb_icon} alt="" />
            </div>

            <div className="card">
                <p>Food vlog to explore</p>
                <img src={assets.message_icon} alt="" />
            </div>

            <div className="card">
                <p> learn about Web Development </p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
