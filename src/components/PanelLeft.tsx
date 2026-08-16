import { FiChevronDown } from "react-icons/fi";
const PanelLeft: React.FC = () =>{
 return(
    <section
        id="panel-left"
        className="snap-start min-h-[100dvh] xl:h-auto xl:min-h-screen p-10 pt-45 flex justify-center items-center overflow-hidden flex-col relative"
      >
        <div id="auth-visual" className="w-[50%] sm:w-full max-w-[250px] aspect-[250/326] mb-10 relative shadow-2xl shadow-[#6d5efc]/50 rounded-3xl pointer-events-none">
          <div id="auth-photo-wrap" className="rounded-3xl p-1 bg-white border border border-white inset-0 absolute">
            <img
              src="https://www.jswkol.com/influ.jpg"
              className="w-full h-full rounded-3xl object-cover"
              alt=""
            />
            <span className="absolute flex top-[10%] -right-[4%] py-2 px-3 gap-1.5 bg-white rounded-full live-creator-font font-bold text-purple-600 justify-center shadow-xl items-center"><i className="inline-block  bg-red-500 rounded-full ring-4 ring-red-500/20" style={{width:"7px",height:"7px"}}></i> Live creator</span>
          </div>
          <span className="auth-float-smile absolute bg-white/90 text-2xl rounded-full p-2 top-[17%] -left-[19%] -rotate-7">😍</span>
          <span className="auth-float-heart absolute bg-white/90 text-2xl rounded-full p-2 top-[57%] -right-[17%] -rotate-7">💜</span>
          <span className="auth-float-fire absolute bg-white/90 text-xl rounded-full p-2 top-[85%] -left-[14%] -rotate-7">🔥</span>
          <span className="auth-float-spark absolute bg-white/90 text-xl rounded-full p-2 -top-[11%] right-[2%] -rotate-7">✨</span>
          <span className="absolute flex flex-col bg-white py-1 px-3 rounded-xl -bottom-[5%] -right-[10%] -rotate-6 shadow-2xl"><b>4.8M</b><small className="text-gray-400">TOTAL REACH</small></span>
        </div>
        <div id="login-brand-content" className="flex w-full flex-col gap-4 justify-center items-center xl:justify-start xl:items-start pb-24">
          <span className="text-[#4a3bd6] text-sm font-bold">JSW KOL Platform</span>
          <h1 className="text-2xl font-bold max-w-lg xl:text-6xl">Make creator work <em className="text-[#6d5efc] not-italic">work.</em></h1>
          <p className="text-black/60 justify-center items-center text-center">A simpler way to manage campaigns, creators, approvals, and results.</p>
        </div>
        <div id="panel-left-footer" className="flex justify-start items-end w-full h-full absolute text-xs text-black/40 hidden left-10 bottom-10 lg:flex">
            <p>© JSW All rights reserved</p>
        </div>
        <div id="scroll-down" className="flex justify-center items-center w-full absolute bottom-2 text-xs text-black/40 flex-col scroll-down cursor-pointer xl:hidden">
            <p className="font-bold">SCROLL DOWN</p>
            <h1 className="font-bold text-black text-lg">Join</h1>
            <FiChevronDown size={25} color="#6d5efc"/>
        </div>
      </section>
 )
}
export default PanelLeft
