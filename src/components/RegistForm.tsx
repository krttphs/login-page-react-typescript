import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";

interface RegistFormProps {
    THLang: boolean;
}

const RegistForm: React.FC<RegistFormProps> = ({THLang}) => {
    const [firstName, setFirstName] = useState<string>("");
    const [firstNameError, setFirstNameError] = useState<string>("");

    const [lastName, setLastName] = useState<string>("");
    const [lastNameError, setLastNameError] = useState<string>("");

    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");

    const [position, setPosition] = useState<string>("");
    const [positionError, setPositionError] = useState<string>("");

    const [password, setPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [isShow, setIsShow] = useState<boolean>(false);

    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

    const handleFirstName = (value: string) => {
        if (value.trim() === "") {
            if(THLang){
                setFirstNameError("จำเป็นต้องกรอกชื่อ");
            } else {
                setFirstNameError("First name is required")
            }
            
        } else {
            setFirstNameError("");
        }
    };
    const handleLastName = (value: string) => {
        if (value.trim() === "") {
            if(THLang){
                setLastNameError("จำเป็นต้องกรอกนามสกุล");
            } else {
                setLastNameError("Last name is required")
            }
        } else {
            setLastNameError("");
        }
    };

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

    const handlePosition = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPosition(event.target.value);
        setPositionError("")
    };

    const handlePassword = (value: string) =>{
        if(value.trim() === ""){
            if(THLang){
                setPasswordError("จำเป็นต้องกรอกรหัสผ่าน")
            } else {
                setPasswordError("Password is required")
            }
        } else if(value.length < 8){
            if(THLang){
                setPasswordError("รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร")
            } else {
                setPasswordError("Password must be at least 8 characters")
            }
        } else {
            setPasswordError("")
        }
        handleConfrimPassword(confirmPassword);
    }
    
    const handleConfrimPassword = (value:string) =>{
        if(password != value){
            if(THLang){
                setConfirmPasswordError("รหัสผ่านไม่ตรงกัน")
            } else {
                setConfirmPasswordError("Passwords do not match")
            }
            
        } else {
            setConfirmPasswordError("")
        }
    }

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(firstName.trim() === ""){
            if(THLang){
                setFirstNameError("จำเป็นต้องกรอกชื่อ")
            } else {
                setFirstNameError("First name is required")
            }
        }
        if(lastName.trim() === ""){
            if(THLang){
                setLastNameError("จำเป็นต้องกรอกนามสกุล")
            } else {
                setLastNameError("Last name is required")
            }
        }
        if(email.trim() === ""){
            if(THLang){
                setEmailError("จำเป็นต้องกรอกอีเมล")
            } else {
                setEmailError("Email is required")
            }
        }
        if(position === ""){
            if(THLang){
                setPositionError("จำเป็นต้องเลือกตำแหน่ง")
            } else {
                setPositionError("Position is required")
            }
        }
        if(password === ""){
            if(THLang){
                setPasswordError("จำเป็นต้องกรอกรหัสผ่าน")
            } else {
                setPasswordError("Password is required")
            }
        }
        if(firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "" && position !== "" && password !== "" && password === confirmPassword){
            if(THLang){
                alert("ผ่านครับ");
            } else {
                alert("completed!");
            }
            
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col text-xs mt-7 gap-1 relative max-w-[470px]">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col flex-1 relative">
                    <label htmlFor="firstname" className="mb-1">
                        {THLang ? "ชื่อ" : "First name"}
                    </label>
                    <div className="relative">
                        <input
                        id="firstname"
                        type="text"
                        placeholder={THLang ? "ชื่อ" : "First name"}
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                            handleFirstName(e.target.value);
                        }}
                        className={`w-full py-3 pl-10 pr-5 border rounded-lg mt-1 border-black/20 outline-none ${firstNameError ? "border-red-300 focus:ring-3 focus:ring-red-100" : "focus:border-purple-300 focus:ring-3 focus:ring-purple-100"}`}
                    />
                    <FiUser size={20} className="absolute top-4 left-3 text-black/30" />
                    </div>
                    {firstNameError && (
                        <h5
                            id="firstNameAlert"
                            className="flex text-red-500 mt-1"
                            style={{ fontSize: 11 }}
                        >
                            {firstNameError}
                        </h5>
                    )}
                </div>
                <div className="flex flex-col flex-1 relative">
                    <label htmlFor="lastname" className="mb-1">
                        {THLang ? "นามสกุล" : "Last name"}
                    </label>
                    <div className="relative">
                    <input
                        id="lastname"
                        type="text"
                        placeholder={THLang ? "นามสกุล" : "Last name"}
                        value={lastName} 
                        onChange={(e) => {
                            setLastName(e.target.value);
                            handleLastName(e.target.value);
                        }}
                        className={`w-full py-3 pl-10 pr-5 border rounded-lg mt-1 border-black/20 outline-none ${lastNameError ? "border-red-300 focus:ring-3 focus:ring-red-100" : "focus:border-purple-300 focus:ring-3 focus:ring-purple-100"}`}
                    />
                    <FiUser size={20} className="absolute top-4 left-3 text-black/30" />
                    </div>
                    
                    {lastNameError && (
                        <h5
                            id="lastNameAlert"
                            className="flex text-red-500 mt-1"
                            style={{ fontSize: 11 }}
                        >
                            {lastNameError}
                        </h5>
                    )}
                </div>
            </div>
            <div className="flex flex-col relative mt-2">
                <label htmlFor="email" className="mb-1">
                    {THLang ? "อีเมล" : "Email"}
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        handleEmail(e.target.value);
                    }}
                    className={`w-full py-3 pl-10 pr-5 border rounded-lg mt-1 border-black/20 outline-none ${emailError ? "border-red-300 focus:ring-3 focus:ring-red-100" : "focus:border-purple-300 focus:ring-3 focus:ring-purple-100"}`}
                />
                <FiMail size={20} className="absolute top-9 left-3 text-black/30" />
                {emailError && (
                    <h5
                        id="emailAlert"
                        className="flex text-red-500 mt-1"
                        style={{ fontSize: 11 }}
                    >
                        {emailError}
                    </h5>
                )}
            </div>
            <div className="flex flex-col relative mt-2">
                <label htmlFor="position" className="mb-1">
                    {THLang ? "ตำแหน่ง" : "Position"}
                </label>
                <select
                    id="position"
                    value={position}
                    onChange={handlePosition}
                    className={`w-full py-3 pl-10 pr-10 border rounded-lg mt-1 outline-none appearance-none transition-colors cursor-pointer bg-white ${position ? "text-black" : "text-gray-400"}
            ${positionError ? "border-red-300 focus:ring-3 focus:ring-red-100" : ""} 
            border-black/20 focus:border-purple-300 focus:ring-3 focus:ring-purple-100`}
                >
                    <option value="" disabled hidden>
                        {THLang ? "เลือกตำแหน่ง" : "Select position"}
                    </option>
                    <option value="marketing" className="text-black">
                        {THLang ? "การตลาด" : "Marketing"}
                    </option>
                    <option value="marketing_manager" className="text-black">
                        {THLang ? "ผู้จัดการการตลาด" : "Marketing Manager"}
                    </option>
                    <option value="director" className="text-black">
                        {THLang ? "ผู้อำนวยการ" : "Director"}
                    </option>
                    <option value="accounting" className="text-black">
                        {THLang ? "บัญชี" : "Accounting"}
                    </option>
                </select>
                {positionError && (
                    <h5
                        id="emailAlert"
                        className="flex text-red-500 mt-1"
                        style={{ fontSize: 11 }}
                    >
                        {positionError}
                    </h5>
                )}
                <BiBuildingHouse
                    size={20}
                    className="absolute top-9 left-3 text-black/30"
                />
            </div>
            <div className="relative flex flex-col mt-2">
                <label htmlFor="password" className="mb-1">
                    {THLang ? "รหัสผ่าน" : "Password"}
                </label>
                <input
                    id="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        handlePassword(e.target.value);
                    }}
                    type={isShow ? "text" : "password"}
                    placeholder={THLang ? "กรอกรหัสผ่านของคุณ" : "Create a password"}
                    className={`py-3 pl-10 pr-9 border rounded-lg mt-1 border-black/20 outline-none ${passwordError ? "border-red-300 focus:ring-3 focus:ring-red-100" : "focus:border-purple-300 focus:ring-3 focus:ring-purple-100"}`}
                />
                <FiLock
                    size={20}
                    className="flex absolute top-9 left-3 text-gray-400"
                />
                <FiEye
                    size={16}
                    className="flex absolute top-9 right-3 text-gray-400 cursor-pointer mr-1"
                    onClick={() => setIsShow(!isShow)}
                />
                <h5 id="passwordAlert" className={`flex ${ passwordError ? "text-red-500" : "text-black/50"} mt-1`} style={{fontSize:11}}>
                    {passwordError ? passwordError : "อย่างน้อย 8 ตัวอักษร"}
                </h5>
            </div>
            <div className="relative flex flex-col mt-2">
                <label htmlFor="confirmPassword" className="mb-1">
                    {THLang ? "ยืนยันรหัสผ่าน" : "Confirm password"}
                </label>
                <input
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        handleConfrimPassword(e.target.value);
                    }}
                    type={isShow ? "text" : "password"}
                    placeholder={THLang ? "กรอกรหัสผ่านอีกครั้ง" : "Re-enter your password"}
                    className={`py-3 pl-10 pr-9 border rounded-lg mt-1 border-black/20 outline-none ${confirmPasswordError ? "border-red-300 focus:ring-3 focus:ring-red-100" : "focus:border-purple-300 focus:ring-3 focus:ring-purple-100"}`}
                />
                <FiLock
                    size={20}
                    className="flex absolute top-9 left-3 text-gray-400"
                />
                <h5 id="confirmPasswordAlert" className="flex text-red-500 mt-1" style={{fontSize:11}}>
                    {confirmPasswordError}
                </h5>
            </div>
            <p className="flex justify-center items-start gap-2 bg-gray-100 py-2 px-2 rounded-xl border border-gray-200 text-black/60"><BsShieldCheck className="mt-1"/>{THLang ? "บัญชีเจ้าหน้าที่ใหม่ต้องได้รับการอนุมัติจากผู้ดูแลระบบก่อนจึงจะเข้าใช้งานได้" : "New staff accounts require administrator approval before access is granted."}</p>
            <button type="submit" className="flex flex-row justify-center items-center text-white bg-[#6d5efc] p-3 rounded-3xl shadow-lg mt-3 gap-2 cursor-pointer" style={{fontSize:13}}>{THLang ? "ส่งการลงทะเบียน" : "Submit registration"}<FiArrowRight /></button>
        </form>
    );
};

export default RegistForm;
