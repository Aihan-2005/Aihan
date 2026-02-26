"use client";

import { useState } from "react";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type Props = {
  tabs: Tab[];
};

export default function TabSwitcher({ tabs }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="my-4">
      <div className="flex gap-2 border-b border-white/10 mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`pb-2 px-3 text-sm transition-all border-b-2 ${
              active === i
                ? "border-blue-500 text-blue-400"
                : "border-transparent text-white/40 hover:text-white/70"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
}
