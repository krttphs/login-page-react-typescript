import { FiMail } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";
import { useState } from "react";

interface LoginFormProps {
  THLang: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({THLang}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [loginAlert, setLoginAlert] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleEmail = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (value.trim() === "") {
        if(THLang){
            setEmailError("กรุณากรอกอีเมล");
        } else {
            setEmailError("Email is required")
        }
    } else if (!emailRegex.test(value)) {
        if(THLang){
            setEmailError("กรุณากรอกอีเมลให้ถูกต้อง");
        } else {
            setEmailError("Enter a valid email address");
        }
    } else {
      setEmailError("");
    }
  };
  const handlePasswordBlur = () => {
    if (password.trim() === "") {
        if(THLang){
            setPasswordError("กรุณากรอกรหัสผ่าน");
        } else {
            setPasswordError("Password is required");
        }
      
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.trim() === "") {
      if(THLang){
            setEmailError("กรุณากรอกอีเมล");
        } else {
            setEmailError("Email is required")
        }
    }
    if (password.trim() === "") {
      if(THLang){
            setPasswordError("กรุณากรอกรหัสผ่าน");
        } else {
            setPasswordError("Password is required");
        }
    }
    if (email.trim() !== "" && password.trim() !== "") {
        if(THLang){
            setLoginAlert("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
        } else {
            setLoginAlert("Invalid email or password");
        }
    }
  };

  return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-xs mt-7 gap-1 relative"
      >
        <label htmlFor="email">{THLang ? "อีเมล" : "Email address"}</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="name@company.com"
          onChange={(e) => {
            setEmail(e.target.value);
            handleEmail(e.target.value);
          }}
          className={`py-3 pl-10 pr-5 border rounded-lg mt-1 border-black/20 outline-none ${emailError ? "border-red-300 focus:ring-3 focus:ring-red-100" : "focus:border-purple-300 focus:ring-3 focus:ring-purple-100"}`}
        />
        <FiMail
          size={20}
          className="flex absolute top-9 left-3 text-gray-400"
        />
        {emailError && (
          <h5 id="emailAlert" className="flex text-red-500">
            {emailError}
          </h5>
        )}
        <div className="relative flex flex-col">
          <label htmlFor="password" className="mt-3">
            {THLang ? "รหัสผ่าน" : "Password"}
          </label>
          <input
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordError) setPasswordError("");
            }}
            type={isShow ? "text" : "password"}
            onBlur={handlePasswordBlur}
            placeholder={THLang ?"กรอกรหัสผ่านของคุณ" : "Enter your password"}
            className={`py-3 pl-10 pr-9 border rounded-lg mt-1 border-black/20 outline-none ${passwordError ? "border-red-300 focus:ring-3 focus:ring-red-100" : "focus:border-purple-300 focus:ring-3 focus:ring-purple-100"}`}
          />
          <FiLock
            size={20}
            className="flex absolute top-11 left-3 text-gray-400"
          />
          <FiEye
            size={16}
            className="flex absolute top-11 right-3 text-gray-400 cursor-pointer mr-1"
            onClick={() => setIsShow(!isShow)}
          />
        </div>
        {passwordError && (
          <h5 id="passwordAlert" className="flex text-red-500">
            {passwordError}
          </h5>
        )}
        <a
          href="#forgot-password"
          className="text-[#4a3bd6] mt-3 cursor-pointer font-bold"
        >
          {THLang ? "ลืมรหัสผ่าน?" : "Forgot password?"}
        </a>
        {loginAlert && (
          <p className="flex justify-start items-center gap-2 bg-red-100 py-3 px-3 mt-2 rounded-xl border border-red-200 text-red-500 font-bold">
            <FiAlertTriangle size={15} />
            {THLang ? "อีเมลหรือรหัสผ่านไม่ถูกต้อง" : "Invalid email or password"}
          </p>
        )}
        <button
          type="submit"
          className="flex flex-row justify-center items-center text-white bg-[#6d5efc] p-3 rounded-3xl shadow-lg mt-3 gap-2 cursor-pointer font-bold"
          style={{ fontSize: 13 }}
        >
          {THLang ? "เข้าสู่ระบบ" : "Sign in"}
          <FiArrowRight />
        </button>
      </form>
  );
};
export default LoginForm;
