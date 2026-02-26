"use client";

import { motion } from "framer-motion";

export type Section = {
  id: string;
  title: string;
  icon?: string;
  children?: Section[];
};

export const sections: Section[] = [
  { id: "overview", title: "نمای کلی", icon: "🏠" },
  { id: "quickstart", title: "شروع سریع", icon: "⚡" },
  { id: "auth", title: "احراز هویت API", icon: "🔐" },
  {
    id: "models",
    title: "مدل‌های WiserAI",
    icon: "🤖",
    children: [
      { id: "models-text", title: "مدل‌های متنی" },
      { id: "models-chat", title: "مدل‌های مکالمه" },
      { id: "models-vision", title: "مدل‌های بینایی" },
      { id: "models-multi", title: "مولتی‌مدال" },
    ],
  },
  { id: "api", title: "درخواست‌های API", icon: "📡" },
  { id: "sdks", title: "SDK ها", icon: "📦" },
  { id: "usecases", title: "موارد استفاده", icon: "💼" },
  { id: "errors", title: "کدهای خطا", icon: "⚠️" },
  { id: "faq", title: "سوالات متداول", icon: "❓" },
];

type Props = {
  active: string;
  setActive: (id: string) => void;
};

export default function Sidebar({ active, setActive }: Props) {
  return (
    <aside className="w-[270px] min-h-screen border-l border-white/10 bg-white/5 backdrop-blur-sm px-5 py-8 sticky top-0">
      <p className="text-xs text-white/40 mb-6 tracking-widest uppercase">مستندات</p>
      <nav className="flex flex-col gap-1">
        {sections.map((s) => (
          <div key={s.id}>
            <button
              onClick={() => setActive(s.id)}
              className={`w-full text-right flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                active === s.id
                  ? "bg-blue-600/20 text-blue-400 font-semibold"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {s.icon && <span>{s.icon}</span>}
              {s.title}
            </button>

            {s.children && (
              <div className="mr-6 mt-1 flex flex-col gap-1">
                {s.children.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => setActive(child.id)}
                    className={`w-full text-right text-xs px-3 py-1.5 rounded-md transition-all ${
                      active === child.id
                        ? "text-blue-400 font-medium"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {child.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
