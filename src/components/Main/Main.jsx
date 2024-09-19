import { assets } from "../../assets/assets";
import  { Fragment, useContext } from "react";
import { Context } from "../../context/context";

const Main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

  return (
    <div className="main flex-1 min-h-full pb-40 relative text-xl p-5 text-[#585858]">
      <div className="nav flex items-center justify-between">
        <p>Gemini</p>
        <img className="w-10 rounded-full" src={assets.user_icon} alt="" />
      </div>
      <div className="main-container max-w-[900px] m-auto  ">

        {!showResult
        ? <Fragment>
           <div className="greet my-7 mx-0 text-5xl text-[#c4c7c5] font-medium p-5">
          <p>
            <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-gradient-[16deg] bg-clip-text text-transparent">
              Hello, Dev.
            </span>
          </p>
          <p className="mt-2">How can I help you today?</p>
        </div>
        <div className="cards grid grid-cols-4 gap-4 p-5">
          <div className="card h-50 p-6 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-base">
              suggest beautiful places to see on an upcoming road trip{" "}
            </p>
            <img
              className="w-9 p-1 absolute bg-[#ffff] rounded-3xl bottom-2 right-2"
              src={assets.compass_icon}
              alt=""
            />
          </div>

          <div className="card h-50 p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-base">
              Next.js new projects for me{" "}
            </p>
            <img
              className="w-9 p-1 absolute bg-[#ffff] rounded-3xl bottom-2 right-2"
              src={assets.bulb_icon}
              alt=""
            />
          </div>

          <div className="card h-50 p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-base">
              Food vlog to explore more recipes
            </p>
            <img
              className="w-9 p-1 absolute bg-[#ffff] rounded-3xl bottom-2 right-2"
              src={assets.message_icon}
              alt=""
            />
          </div>

          <div className="card h-50 p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-base">
              {" "}
              learn about Web Development{" "}
            </p>
            <img
              className="w-9 p-1 absolute bg-[#ffff] rounded-3xl bottom-2 right-2"
              src={assets.code_icon}
              alt=""
            />
          </div>
        </div>
        </Fragment>
        :<div className="result py-0 px-[5%] max-h-[70vh] overflow-y-scroll " >
          <div className="result-title  my-10 mx-0 flex items-center gap-5">
            <img src={assets.user_icon} alt="User Img" className="w-10 rounded-full" />

            <p className="text-base font-bold leading-8 ">{recentPrompt}</p>
          </div>
          <div className="result-data flex items-start gap-5">
            <img src={assets.gemini_icon} alt="Gamini icon" className="w-10 rounded-full" />
            {loading
            ? <div className="loader w-full flex flex-col gap-3"  >
              <hr className=" rounded-md border-0 bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
              <hr className=" rounded-md border-0 bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
              <hr className=" rounded-md border-0 bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
            </div>
          :<p className="text-base font-light leading-8 " dangerouslySetInnerHTML={{__html:resultData}}></p>}
            
          </div>
        </div>
        }


       
        <div className="main-bottom absolute bottom-0 w-[100%] max-w-[900px] py-0 px-5 m-auto">
          <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] py-2 px-5 rounded-full">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter your prompt here..." className="flex-1 bg-transparent border-none outline-none p-2 text-base"/>
            <div className="flex justify-start gap-4">
              <img className="w-6 cursor-pointer inline-block" src={assets.gallery_icon} alt="" />
              <img className="w-6 cursor-pointer inline-block" src={assets.mic_icon} alt="" />
              <img onClick={()=>onSent(input)} className="w-6 cursor-pointer inline-block" src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info text-sm my-4 mx-auto text-center font-light">
            Gemini may display inccurate info, including about people, so
            double-check its response. Your privacy and Gemini App.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
