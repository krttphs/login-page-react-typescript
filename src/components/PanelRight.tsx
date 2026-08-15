import { FiLock } from "react-icons/fi";
import LoginForm from "./LoginForm";
import RegistForm from "./RegistForm";
import { useState } from "react";

const PanelRight: React.FC = () => {
   const [isLogin,setIsLogin] = useState<boolean>(true)
   const [THLang, setTHLang] = useState<boolean>(true);
    return(
        <section id="panel-right" className={`${THLang ? "thai-sarabun" : ""} snap-start min-h-[100dvh] xl:h-auto xl:min-h-screen p-3 lg:p-10 pb-24 flex justify-center items-center flex-col bg-gradient-to-t from-[#eee9ff] to-[#eee9ff] relative`}>
            <div className={`flex absolute flex-row absolute top-4 right-6 bg-gray-200 rounded-lg p-1 thai-sarabun ${isLogin ? "" : "hidden"}`} style={{fontSize:13}}>
        <h1 onClick={() => setTHLang(false)} className={`flex flex-1 px-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${!THLang ? "text-[#6d5efc] bg-white" : "text-black/40 hover:text-black/70"}`}>EN</h1>
        <h1 onClick={() => setTHLang(true)} className={`flex flex-1 px-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${THLang ? "text-[#6d5efc] bg-white" : "text-black/40 hover:text-black/70"}`}>ไทย</h1>
      </div>
            <div id="login-heading" className="font-bold flex flex-col justify-center items-center gap-4" style={{fontSize:27}}>{isLogin ? <><FiLock color="#4a3bd6" size={38} className="p-2 bg-gray-100 rounded-2xl"/><h1>{THLang ? "เข้าสู่ระบบ" : "Sign in"}</h1></> : <h1>{THLang ? "ลงทะเบียนเจ้าหน้าที่" : "Staff Registration"}</h1>}</div>
            <div id="login-form" className={`w-full ${isLogin ? "max-w-[430px]" : "max-w-[470px]"} bg-white rounded-2xl mt-4 shadow-xl p-10`}>
                <div id="login-card-head" className="text-sm text-black/40">{isLogin ? <p>{THLang ? "กรอกข้อมูลของคุณเพื่อเข้าใช้งานพื้นที่ทำงาน" :"Enter your credentials to access the workspace."}</p> : <p>{THLang ? "ลงทะเบียนบัญชีเพื่อขอสิทธิ์เข้าถึงพื้นที่ทำงาน" : "Register an account to request access to the workspace."}</p>}</div>
                {isLogin ? <LoginForm THLang={THLang}/> : <RegistForm THLang={THLang}/>}
                <div id="login-help" className="text-xs flex justify-center items-center mt-6 w-full flex-col">
                    <div className="w-full bg-black/10 mb-6" style={{height:1}}></div>
                    {isLogin ? <h5 className="text-black/40 mb-2">{THLang ? "เป็นพนักงาน?" : "Staff member?"} <a href="/register" onClick={(e)=>{e.preventDefault();setIsLogin(false)}} className="text-[#4a3bd6] cursor-pointer">{THLang ? "ลงทะเบียนบัญชี" : "Register an account"}</a></h5> : <h5 className="text-black/40">{THLang ? "มีบัญชีอยู่แล้ว?" : "Already have an account?"} <a href="/login" onClick={(e)=>{e.preventDefault();setIsLogin(true)}} className="text-[#4a3bd6] cursor-pointer">{THLang ? "เข้าสู่ระบบ": "Sign in"}</a></h5>}
                    {isLogin ? <h5 className="text-black/40">{THLang ? "เป็น KOL / อินฟลูเอนเซอร์?" : "KOL / influencer?"} <span className="text-[#4a3bd6] cursor-pointer">{THLang ? "ลงทะเบียนเป็น KOL" : "Register as a KOL"}</span></h5> : ""}
                </div>
            </div>
            {isLogin && <div id="login-form-foot" className="flex flex-row gap-5 justify-center items-end absolute bottom-5 text-black/40" style={{fontSize:11}}>
                <a href="#privacy">{THLang ? "ความเป็นส่วนตัว" : "Privacy"}</a>
                <a href="#terms">{THLang ? "ข้อกำหนด" : "Terms"}</a>
                <span>{THLang ? "ศูนย์ช่วยเหลือ" : "Help Center"}</span>
            </div>}
      </section>
    )
}

export default PanelRight