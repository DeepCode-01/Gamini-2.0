import { assets } from "../../assets/assets";
const Main = () => {
  return (
    <div className='main flex-1 min-h-full pb-40 relative text-xl p-5 text-[#585858]'>
      <div className="nav flex items-center justify-between">
        <p>Gemini</p>
        <img className='w-10 rounded-full' src={assets.user_icon} alt="" />
      </div>
      <div className="main-container max-w-[900px] m-auto  ">
        <div className="greet my-7 mx-0 text-5xl text-[#c4c7c5] font-medium p-5">
            <p><span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-gradient-[16deg] bg-clip-text text-transparent">Hello, Dev.</span></p>
            <p className="mt-2">How can I help you today?</p>
        </div>
        <div className="cards grid grid-cols-4 gap-4 p-5">
            <div className="card h-50 p-6 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-base">suggest beautiful places to see on an upcoming road trip </p>
                <img className="w-9 p-1 absolute bg-[#ffff] rounded-3xl bottom-2 right-2" src={assets.compass_icon} alt="" />
            </div>

            <div className="card h-50 p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]">
                <p>Next.js new projects for me </p>
                <img className="w-9 p-1 absolute bg-[#ffff] rounded-3xl bottom-2 right-2" src={assets.bulb_icon} alt="" />
            </div>

            <div className="card h-50 p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]">
                <p>Food vlog to explore more recipes</p>
                <img className="w-9 p-1 absolute bg-[#ffff] rounded-3xl bottom-2 right-2" src={assets.message_icon} alt="" />
            </div>

            <div className="card h-50 p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]">
                <p> learn about Web Development </p>
                <img className="w-9 p-1 absolute bg-[#ffff] rounded-3xl bottom-2 right-2" src={assets.code_icon} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
