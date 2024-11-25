import React, { useEffect, useState } from "react"

const Generals = () => {
    const [email, setEmail] = useState("");

    useEffect(() => {
        
        const loggedInEmail = localStorage.getItem("email"); 
        if (loggedInEmail) {
            setEmail(loggedInEmail);
        }
    }, []); 
    return (
        <div className=" bg-[#0f212e] text-white rounded-lg py-1 min-h-screen">
            <div className="bg-[#1a2c38] text-white rounded-lg py-4 h-64 w-120 m-10">
            <p className="py-4 font-bold text-2xl ml-4 border-b-[1px]">Email</p>
            <div>
                <p>Email</p>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full p-2 mt-4 bg-[#2a3d49] border border-[#3e4b59] rounded-lg text-white"
                    placeholder="Enter your email"
                />
            </div>
            {/* <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full p-2 mt-4 bg-[#2a3d49] border border-[#3e4b59] rounded-lg text-white"
                    placeholder="Enter your email"
                /> */}
            </div>
        </div>
    )
}
export default Generals