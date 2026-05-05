"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-center">
        ارتباط با ما
      </h1>
     

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
        
        <div className="space-y-10">
          <div className="flex items-start gap-4">
            <div className="text-teal-400 text-3xl">
                <img src="/images/icons8-location-64 (1).png" alt="location"className="w-10" />
            </div>
            <div>
             
              <p className="text-blue-400">تهران, جردن<br/> خیابان سعیدی<br/></p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-blue-400 text-3xl">
                <img src="/images/icons8-phone-call-64.png" alt="call"className="w-10" />
            </div>
            <div>
              
              <p className="text-blue-400">000-000-0000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-blue-400">
                <img src="/images/icons8-email-64.png" alt="email" className="w-10"/>
            </div>
            <div>
              
              <p className="text-blue-400">Wiser2zx@gmail.com</p>
            </div>
          </div>

          <div className="mt-10">
            
            <div className="flex gap-6 text-2xl mt-4 text-gray-300 ">
              <a href="#" rel="noopener noreferrer" className="hover:text-teal-400">
                <img src="/images/icons8-instagram-logo-64.png" alt="instagram" className="w-10" />
              </a>
              <a href="#" rel="noopener noreferrer" className="hover:text-teal-400">
                <img src="/images/icons8-telegram-64.png" alt="telegram" className="w-10"/>
              </a>
              <a href="#" rel="noopener noreferrer" className="hover:text-teal-400">
                <img src="/images/icons8-whatsapp-logo-64.png" alt="whatsapp" className="w-10" />
              </a>
              <a href="#" rel="noopener noreferrer" className="hover:text-teal-400">
                <img src="/images/icons8-youtube-logo-64.png" alt="youtube" className="w-10"/>
              </a>
            </div>
          </div>
        </div>

        
        <div className="relative rounded-2xl shadow-xl overflow-hidden border border-gray-700">
 
        
          <div className="relative bg-gray-800 p-10 ">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-blue-500/5"></div>
            
            
            <div className="relative z-20 flex items-center justify-center gap-3 mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <h2 className="text-3xl font-semibold text-center">پیشنهادات خود را با ما در میان بگذارید</h2>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            </div>

            <form className="space-y-6 relative z-20">
              <div>
                <label className="block text-gray-300 mb-2">نام شما</label>
                <div className="relative group">
                  <input
                    type="text"
                    className="w-full bg-gray-900/70 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300 group-hover:border-teal-300"
                  />
                  
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">ایمیل</label>
                <div className="relative group">
                  <input
                    type="email"
                    className="w-full bg-gray-900/70 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300 group-hover:border-teal-300"
                  />
                 
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">متن پیام</label>
                <div className="relative group">
                  <textarea
                    className="w-full bg-gray-900/70 border border-gray-600 rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all duration-300 group-hover:border-teal-300 resize-none"
                  ></textarea>
                
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-400 to-blue-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-teal-400/30 transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden group"
              >
                <span className="relative z-10 text-white">ارسال</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>

      
      <style jsx global>{`
        @keyframes gradientRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .animate-gradient-rotate {
          animation: gradientRotate 8s linear infinite;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}


