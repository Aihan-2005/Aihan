"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Prices() {
  const [tokens, setTokens] = useState(1000);

  // قیمت هر توکن (تست - بعداً می‌تونی وصلش کنی به دیتابیس یا API)
  const pricePerToken = 50; // هر توکن = 50 ریال (مثال)

  const totalPrice = tokens * pricePerToken;

  return (
    <section
      dir="rtl"
      className="w-full flex flex-col items-center py-20 px-6 bg-black text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-bold mb-10"
      >
        خرید توکن WiserAI
      </motion.h1>

      {/* Section محاسبه قیمت */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="w-full max-w-xl bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl mb-16"
      >
        <h2 className="text-xl font-semibold mb-4">محاسبه قیمت بر اساس تعداد توکن</h2>

        <label className="block mb-4">
          <span className="text-gray-300">تعداد توکن مورد نیاز:</span>
          <input
            type="number"
            min={1}
            value={tokens}
            onChange={(e) => setTokens(Number(e.target.value))}
            className="mt-2 w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
          />
        </label>

        <div className="mt-6 text-lg font-semibold flex justify-between">
          <span>قیمت نهایی:</span>
          <span>{totalPrice.toLocaleString()} ریال</span>
        </div>

        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-lg text-lg font-semibold">
          پرداخت و خرید
        </button>
      </motion.div>

      {/* پلن‌های آماده */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {/* Starter */}
        <div className="border border-gray-700 bg-gray-900 px-6 py-10 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-2">Starter</h3>
          <p className="text-gray-400 mb-6">مناسب تست اولیه و توسعه سبک</p>
          <p className="text-4xl font-bold mb-6">10,000 توکن</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">
            خرید 50,000 ریال
          </button>
        </div>

        {/* Pro */}
        <div className="border border-blue-600 bg-blue-950 px-6 py-10 rounded-2xl text-center shadow-md shadow-blue-500/20">
          <h3 className="text-2xl font-bold mb-2">Pro</h3>
          <p className="text-gray-300 mb-6">برای پروژه‌های حرفه‌ای و تجاری</p>
          <p className="text-4xl font-bold mb-6">50,000 توکن</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">
            خرید 250,000 ریال
          </button>
        </div>

        {/* Enterprise */}
        <div className="border border-gray-700 bg-gray-900 px-6 py-10 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
          <p className="text-gray-400 mb-6">برای شرکت‌ها و پردازش‌های سطح بالا</p>
          <p className="text-4xl font-bold mb-6">200,000 توکن</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">
            خرید 900,000 ریال
          </button>
        </div>
      </motion.div>
    </section>
  );
}
