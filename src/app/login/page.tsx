"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password });
  
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-[#23242a] py-5 px-4">
      <div className="relative shadow-lg shadow-[rgb(21,145,240)]/50 w-[370px] h-[600px] bg-[#1c1c1c] rounded-[5px_5px] overflow-hidden">
        
        <div className="absolute top-[-50%] left-[-50%] w-[370px] h-[500px] 
          bg-gradient-to-r from-transparent via-[rgb(21,145,240)] to-[rgb(150,205,250)] 
          animate-gradient-rotate origin-bottom-right"></div>
        
        
        <div className="absolute top-[-50%] left-[-50%] w-[370px] h-[500px] 
          bg-gradient-to-r from-transparent via-[rgb(21,145,240)] to-[rgb(150,205,250)] 
          animate-gradient-rotate origin-bottom-right 
          animation-delay-3000"></div>
        
        
        <div className="absolute inset-[2px] bg-[#28292d] rounded-[5px_5px] p-8 flex flex-col z-10">
          
         
          <div className="w-full">
            <h1 className="text-[rgb(21,145,240)] text-center text-2xl font-bold mb-5">
              ورود به حساب کاربری
            </h1>
          </div>
          
         
          <form onSubmit={handleSubmit} className="w-full mt-5">
            
            
            <div className="w-full mb-6">
              <label htmlFor="username" className="text-[#9eb3b5] block mb-2">
                نام کاربری
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="نام کاربری"
                required
                className="w-full bg-[rgba(255,255,255,0.2)] rounded-[15px] p-3 border-none outline-none 
                  text-white placeholder-[#cdd1d2] focus:ring-2 focus:ring-[rgb(21,145,240)]/50 transition-all"
              />
            </div>

            
            <div className="w-full mb-8">
              <label htmlFor="password" className="text-[#9eb3b5] block mb-2">
                رمز عبور
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="رمز عبور"
                required
                className="w-full bg-[rgba(255,255,255,0.2)] rounded-[15px] p-3 border-none outline-none 
                  text-white placeholder-[#cdd1d2] focus:ring-2 focus:ring-[rgb(21,145,240)]/50 transition-all"
              />
            </div>

            
            <button
              type="submit"
              className="w-full bg-[rgb(21,145,240)] text-[#16100e] py-3 rounded-[15px] 
                font-semibold cursor-pointer filter drop-shadow-[0_5px_10px_rgb(21,145,240)] 
                hover:brightness-110 hover:drop-shadow-[0_8px_15px_rgb(21,145,240)]
                transition-all duration-300 mb-6"
            >
              ورود
            </button>

            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[rgb(21,145,240)]/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-[#28292d] text-[rgb(21,145,240)]">یا</span>
              </div>
            </div>

            
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full bg-[#003453] hover:bg-[#5393f3] text-[rgb(223,236,246)] 
                py-3 rounded-[15px] font-semibold flex items-center justify-center gap-3
                transition-all duration-300 hover:drop-shadow-[0_5px_10px_rgb(21,145,240)]
                border border-[rgb(21,145,240)]/30 mb-6"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              ورود با حساب گوگل
            </button>

            
            <div className="space-y-3">
              
              <p className="text-[rgb(21,145,240)] text-sm text-center">
                رمز عبور خود را فراموش کرده اید؟{" "}
                <Link href="#" className="text-[rgb(127,230,248)] font-bold hover:underline">
                  اینجا کلیک کنید 
                </Link>
              </p>

              
              <p className="text-[rgb(21,145,240)] text-sm text-center">
                حساب کاربری ندارید؟{" "}
                <Link href="/register" className="text-[rgb(127,230,248)] font-bold hover:underline">
                  اینجا کلیک کنید
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      
      <style jsx global>{`
        @keyframes gradient-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .animate-gradient-rotate {
          animation: gradient-rotate 6s linear infinite;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
}